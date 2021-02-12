package main

import (
	"database/sql"
	"encoding/json"
	"log"
	"net/http"

	_ "github.com/go-sql-driver/mysql"
	"github.com/gorilla/mux"
)

type product struct {
	ID          string `json:"id"`
	Name        string `json:"name"`
	Price       string `json:"price"`
	Image       string `json:"image"`
	Category    string `json:"category"`
	Description string `json:"description"`
}

func enableCors(w *http.ResponseWriter) {
	(*w).Header().Set("Access-Control-Allow-Origin", "*")
}

var db *sql.DB

func main() {

	router := mux.NewRouter()

	router.HandleFunc("/products", fetchProducts).Methods("GET")

	log.Println("listening on port 8000")

	http.ListenAndServe(":8000", router)
}

func fetchProducts(w http.ResponseWriter, r *http.Request) {
	enableCors(&w)

	db, err := sql.Open("mysql", "root:Blessing1!@tcp(database:3306)/products")
	// error maybe here
	// db, err := sql.Open("mysql", "root:Blessing1!@tcp(database:3307)/products")
	if err != nil {
		panic(err.Error())
	}
	defer db.Close()
	var products []product
	// create a variable for the sql query
	query := "select id, name, price, image, category, description from products"
	results, err := db.Query(query)

	if err != nil {
		panic(err.Error())
	}
	// loop thru each item in the database and map into the struct format
	for results.Next() {
		var product product
		err := results.Scan(&product.ID, &product.Name, &product.Price, &product.Image, &product.Category, &product.Description)

		if err != nil {
			panic(err.Error())
		}
		//appends each product e.g. id/ individual item from the scan as it loops through to the product slice
		products = append(products, product)
	}
	//sets the page status to 200
	w.WriteHeader(http.StatusOK)
	//let the browser know we are sending json
	w.Header().Set("Content-Type", "application/json")
	//converts the product slice into json
	json.NewEncoder(w).Encode(products)

}
