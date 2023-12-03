package main

import (
	"fmt"
	"cxj/pkg/api"
)

func main () {
	r := api.GetServer()
	err := r.Run(":4000")
	if err != nil {
		fmt.Println("something went wrong")
	}

	// we should only reach this when service is exiting
	return 
}
