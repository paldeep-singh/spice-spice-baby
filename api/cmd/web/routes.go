package main

import "net/http"

func (app *application) routes() http.Handler {
	mux := http.NewServeMux()

	mux.HandleFunc("GET /{$}", app.home) // Restrict this route to exact matches on / only.
	mux.HandleFunc("GET /api/recipe/{id}/{$}", app.getRecipe)

	return app.recoverPanic(app.logRequest(commonHeaders(mux)))
}
