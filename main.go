package main

import (
	"os"
	"runtime"

	"github.com/getfider/fider/app/cmd"
	"github.com/getfider/fider/app/models"
	"github.com/getfider/fider/app/pkg/env"
	_ "github.com/lib/pq"
	_ "github.com/mattes/migrate/database/postgres"
	_ "github.com/mattes/migrate/source/file"
)

// replaced during CI build
var buildtime = ""
var buildnumber = "local"

// Use this for non-stable releases
// var version = "x.y.z-" + buildnumber

// Use this for stable releases
// var version = "x.y.z"

var version = "0.13.0-" + buildnumber

func main() {
	settings := &models.SystemSettings{
		BuildTime:       buildtime,
		Version:         version,
		Compiler:        runtime.Version(),
		Environment:     env.Current(),
		GoogleAnalytics: env.GetEnvOrDefault("GOOGLE_ANALYTICS", ""),
		Mode:            env.Mode(),
		Domain:          env.MultiTenantDomain(),
	}

	args := os.Args[1:]
	if len(args) > 0 && args[0] == "ping" {
		os.Exit(cmd.RunPing())
	} else {
		os.Exit(cmd.RunServer(settings))
	}
}
