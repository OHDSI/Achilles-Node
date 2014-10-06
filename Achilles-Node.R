# testAchilles.R file
library(Achilles)

testAchilles <- function (jsonObj) {

 # get passed in args (not actually used in this example
 o <- fromJSON(jsonObj)
 db_type <- o$dbms
 cdm <- o$cdm_schema
 results <- o$results_schema
 source_dataset <- o$source_dataset
 analysesToRun <- o$analyses

 # example achilles call and get count
connectionDetails <- createConnectionDetails(dbms="postgresql", "<username>", "<password>", "<database>", <sid>, <db>)
 
renderedSql <- loadRenderTranslateSql(sqlFilename = "Achilles.sql",
                                    packageName = "Achilles",
                                    dbms = db_type,
                                    CDM_schema = cdm, 
                                    results_schema = results, 
                                    source_name = source_dataset, 
                                    list_of_analysis_ids = analysesToRun,
                                    createTable = FALSE,
                                    smallcellcount = 10
  )

 return(toJSON(renderedSql))
}
