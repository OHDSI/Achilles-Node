Achilles-Node
=============
**A Node.js web service for Achilles SQL generation**

Achilles-Node is a web service designed for use by OHDSI web applications and that renders Achilles SQL scripts.
It is not a substitute or required part of running Achilles.

**The Good**

 * Allows creation of customized Achilles scripts without needing to install R/Achilles locally

**The Bad**

  * At present, it does not *run* any Achilles scripts.  They must be cut and paste into a SQL environment.
  
**What's the Point?**

  * Achilles combined with AchillesWeb is a powerful tool used by many.  Achilles-Node is a step towards creating an
  end-to-end web-based Achilles experience (integrating the R and Web components).  It will also ensure that users
  always receive the most up-to-date Achilles analyses without requiring updating of packages locally. 
  
**How Does It Work?**

Achilles-Node accepts input of the followng standard Achilles parameters:

  - dbms (oracle, sql server, postgres, redshift)
  - cdm_schema (name of local cdm schema)
  - results_schema (name of local schema to store Achilles results)
  - source_dataset (name of the dataset (e.g., HCUP))
  - analyses (an array of Achilles analysis ID's to run, default is all)
  - (Pending) create_table (create results tables TRUE / FALSE)
  - (Pending) max_cell_size (maximum size of any individual cell, default 5)
  
Example POST (e.g., to server_url:3000/achilles-api)

```sh
{"dbms":"oracle",
 "cdm_schema":"omop_cdmV4",
 "results_schema":"my_results_db",
 "source_dataset":"RI",
 "analyses":[0,1,2,3,4,5]}
```


Example GET

```sh
server_url:3000/achilles-api?dbms=oracle&cdm_schema=My_CDM&results_schema=My_Results&source_dataset=HCUP
&analyses=101,102,300,400,500,501,502
```

Version
----

0.1

Installation Requirements
-----------

Not recommended for local machine installation at this time. Server-side installation requires:

* Node.js
* node-rio
* R with Achilles
* RServe
