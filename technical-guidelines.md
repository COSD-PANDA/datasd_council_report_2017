#Technical Guidelines overview

This is a high-level overview of the technical guidelines and standards we use for the data on the portal. 


##Data Quality


* Data will be provided in the rawest and most granular form possible.
* For tabular data, each observation is a row and each variable is a column.
* Each observation will have a unique key to identify it.
* To the greatest extent possible, there will be a way to relate data through a common key across datasets. If this key is not available, or if structuring the data that way is impossible, we may do fuzzy joining to datasets that have a high business value for such a correlation. Fuzzy joining involves matching text that is similar but not exactly equal in cases where something is misspelled or entered inconsistently in different source systems.


##Data Formats

* Two-dimensional geospatial data, or points, will be provided in Shapefile and CSV with latitude and longitude.
* Geospatial data that contains anything but points, such as polygons or polylines, will be provided in shapefiles only.
* Dates and times will be standardized to ISO-8601 Format and kept in PST timezone.
* Text will be encoded using UTF-8.

##What is allowed on a portal

* If the data changes more than once a year, we will connect directly to the data source for updates. If we cannot correct directly to the datasource, we may attempt to scrape the API if one exists, however that may decrease our confidence in the data. If it’s an external vendor, we will work with them to establish scheduled data dumps. If neither of these options are available, we will de-prioritize the dataset until we can resolve the issue.
* We have a high understanding of the context of the data and how it’s collected and generated.
* We have close contact with the data owner, and the data owner is responsive to our requests.
* The data is considered a public dataset as described in the policy.

##Data Usability

* Any datasets with more than 1 million rows will be provided as aggregations through secondary ETL so they’re easier to use.
* Data enrichment, such as geocoding, will be executed as needed and if a clear business purpose exists. 
* Data will be released from only a single source that we determine to be the authoritative source for that data. In some cases, we may combine multiple sources (such as databases or spreadsheets) to increase the accuracy of the data. However, we will refrain from joining multiple sources purely to increase features (or columns) in a dataset. 
* Fields will be lowercase.
* Spaces in date fields will be replaced with underscores.
* To the extent possible, we will maintain consistency across fields. For example, ‘date’ will always be ‘date’, not ‘date_’ or ‘Date.’  
Data Documentation
* To the extent possible, each dataset will come with a data dictionary that contains the field names and definitions.
* Resources will be named using the following pattern: resource_name_datasd.extension.
* Resource metadata will be named using the following pattern: resource_name_metadata_datasd.extension.


##Data Filtering


* To the extent possible, data released on the portal will not be filtered, except to exclude irrelevant, inaccurate or test data as needed.
* All steps will be taken to perform aggregation to preserve anonymity and reduce mosaic effect before filtering is considered.
* If filtering is considered, we first make the justification by comparing to datasets of similar type published by other cities cities.
* If filtering does take place, it will be clearly noted on the portal in dataset documentation what filters were applied.
* Any decisions about data filtering must include the Chief Data Officer.

##ETL


* All data will be delivered to the portal using an automated Extract Transform Load process.
* There are two levels of ETL: primary and secondary. Primary ETL extracts from the primary data source. Secondary ETL will always connect to the raw extraction to automate any aggregations.
* ETL workflows will be controlled by a job scheduling tool.
* ETL workflows will be created in Python or R or by using Safe FME.
* ETLs are monitored, and the data team is notified when ETL goes down.