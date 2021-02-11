FROM golang:1.15

WORKDIR /go/src/app
COPY . .

RUN go get -d -v ./...
RUN go install -v ./...
RUN GO get github.com/gorilla/mux
RUN GO get github.com/go-sql-driver/mysql


CMD ["app"]

# May need to change app to api on line 3
# line 8 comments:
# RUN go get -u github.com/go-sql-driver/mysql
# RUN go get -u github.com/gorilla/mux
# expose 8080 


# FROM golang:alpine
# RUN mkdir /api
# ADD . /api/
# WORKDIR /api
# RUN go mod download
# COPY . /api/
# EXPOSE 8000
# RUN go build main.go
# CMD ["./main"]
# delete go.mod and go.sum