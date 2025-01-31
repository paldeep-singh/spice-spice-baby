package main

import (
	"fmt"
	"net/http"
	"strconv"
)

func (app *application) home(w http.ResponseWriter, r *http.Request) {
	w.Write([]byte("Hello from SSB"))
}

func (app *application) getRecipe(w http.ResponseWriter, r *http.Request) {
	id, err := strconv.Atoi(r.PathValue("id"))

	if err != nil || id < 1 {
		app.serverError(w, r, err)
		return
	}

	msg := fmt.Sprintf("Display a recipe with ID %d...", id)
	w.Write([]byte(msg))
}
