# Dataset Brainstorming Guide.

There are six ways to approach dataset brainstorming: 

* By Stakeholder
* By Question
* By Query
* By Osmosis
* By Example
* By Datasource type


## By Stakeholder
Review the list of stakeholders:

> {% include "../../includes/stakeholders.md" %} 

Data flow between your department and these entities.  Or sometimes they don't but you believe they should.  You should have already filled out your list of stakeholders.  For every datasource, go through and ask ***"What data are relevant to these stakeholder from this datasource"***.

Maybe you share the datasource with them directly, but what data do they get from the datasource when it's shared?  Think "lists and spreadsheets".  Try to create as many as possible, we can always filter out.  ***You don't have to worry about determining the exact columns or column headings per dataset just yet***. 

## By Question
Review the list of questions below:
> {% include "../../includes/questions.md" %} 

You don't have to respond to each one, but these will help you come up with datasets for every datasource.  Think "lists and spreadsheets".  Try to create as many as possible, we can always filter out.

## By Query
Talk to your department's IT person (if you have one) and try to come up with the top 5 most run queries on the datasource.  Add them in as datasets!

## By Osmosis
Click [here](../other_cities_portals.html) to review portals from Chicago and And NYC.  See what they publish and use that for inspiration.

## By Example
Review the [Full Example section](../full_example.html).


## By Datasource Type

### PDF File / Word Document
Just move that over as a dataset, and Maksim will deal with it.


### Excel File / Spreadsheet
If the Excel file contains multiple sheets, each sheet that contains "original", non-computed data is a dataset.  For example, if Sheet1 contains a list of PRAs responded to, and Sheet2 Contains a subset of that that was responded to in the last quarter, only Sheet1 is a dataset.  If Sheet2 on the other hand contains a list of divisions that reponded to the PRAs in Sheet1, then both Sheet2 and Sheet1 are datasets. 

### Access Database
This one is tricky as Access DBs can be small or huge.  If you think the entire database makes sense to expose as a dataset because the tables are just not relevant without each other, feel free to put that in as a dataset.  If you have stored queries that you already run against the database, those are prime dataset examples.  Don't forget to try [Some of the Other Brainstorming Methods Above](#dataset-brainstorming-guide)

### GIS Server
You will have to use your judgement here, but this should still be pretty simple.  Ideally, this would be every layer that your department owns or contributes to.  Don't forget to try [Some of the Other Brainstorming Methods Above](#dataset-brainstorming-guide)

### Website / Web Based Application
Let's use our excellent OpenDSD as an example here.  When you visit [OpenDSD](http://www.sandiego.gov/development-services/opendsd), you see several options presented to you.  
![DSD Options](http://take.ms/KXjLO)

Let's break these down into datasets:
The first 3 are "Approval Search, Invoice Search, Code Enforcement Case Search".  The derived datasets would be accordingly:

* List of Approvals
* List of Invoices
* List of Code Enforcement Cases.

The next 3 are maps - "Discretionary Approval Map, Ministerial Approvals Map, Code Enforcement Case Map". So the datasets would be:

* Discretionary Approvals Shapefile (OR list with coordinators)
* Ministerial Approvals Shapefile (OR list with coordinators)
* Code enforcement cases Shapefile (OR list with coordinators)

Don't forget to try [Some of the Other Brainstorming Methods Above](#dataset-brainstorming-guide)

### SAP Module
Any reports you run from the module are good dataset candidates.  They should be ***high value and run regularly***, especially if you have hundreds of them.  Also go through the [Dataset Brainstorming Instructions](#dataset-brainstorming-instructions) above.  Don't forget to try [Some of the Other Brainstorming Methods Above](#dataset-brainstorming-guide)

### SAP Business Warehouse.
This one is easy.  If you have pre-built reports in WEBI each of those is a dataset.  If you can think of any other relevant reports as per the [Dataset Brainstorming Instructions](#dataset-brainstorming-instructions) to run in WEBI add those in as well.  Don't forget to try [Some of the Other Brainstorming Methods Above](#dataset-brainstorming-guide)
