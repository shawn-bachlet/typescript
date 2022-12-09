import * as shell from "shelljs";

// Copy all the view templates
shell.cp( "-R", "src/app/home/templates", "dist/src/app/home" );
shell.cp( "-R", "src/app/common-templates", "dist/src/app" );