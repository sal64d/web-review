package api

import (
	"github.com/gin-gonic/gin"
	"github.com/ekyoung/gin-nice-recovery"
)

func GetServer() *gin.Engine {
	r := gin.New()
	r.Use(gin.Logger())
	r.Use(nice.Recovery(recoveryHandler))
	r.LoadHTMLFiles("error.tmpl")

	r.GET("/healthz", func(c *gin.Context) {
		c.String(200, "OK")
	})

	return r
}

func recoveryHandler(c *gin.Context, err interface{}) {
	c.HTML(500, "tmpl/error.tmpl", gin.H{
		"err": err,
	})	
}
