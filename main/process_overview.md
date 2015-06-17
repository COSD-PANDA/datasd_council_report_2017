# Inventory 

## Note of Acknowledgement.
The base structure for the process was very much inspired by that of San Francisco's inventory, and it's important to acknowledge the wonderful work Joy Bonaguro, the CDO of San Francisco did in creating this process. 

## Purpose
The purpose of the Data Inventory is to get a bird's eye view of data we have in the city and to assist stakeholders like the Mayor, Council, the public to be able to identify data sets they consider high value for publication. However, the inventory process was designed to have the following additional benefits:

* Begin to create a base level of metadata for our city's data.
* Begin to identify people currently working with and managing data.
* Begin to establish a base level inventory of the data we have as a city.
* Understand what systems of record we have for various pieces of information.


## Process Overview

To view the entire guide, please visit the [Data Coordinators Handbook](http://sddc.herokuapp.com/)

The first part of the inventory was to assign information coordinators from each department to work with the Chief Data Officer.  Several larger departments chose to assign multiple coordinators since these people knew their divisions best.  However, most departments assigned a single point of contact to work with the CDO.  It was important for information coordinators to be knowledgeable in the business level of how the department operates, since they would oftentimes need to make decisions based on that knowledge.

The inventory process was designed with the following constraints in mind:

* The information coordinators' time must be used as efficiently as possible, because they have other jobs.
* Coordinators do not have a high level of technical knowledge.
* Execution time frame is only three months.
* Coordinators do not have the same base level of understanding what "data" is.

Consequently, we emphasized the following:

* Minimize large in-person meetings, but be available for small face-to-face meetings, maintaining preference for online collaboration.
* Provide all the necessary information to everyone all the time. 
* Continously collect feedback, and be flexible enough to adjust the process.
* Say no to perfection, but increase accuracy as much as possible.
* Automate repeatable tasks and allow to technology to increase execution velocity.
* Technology or the CDO must not be a bottleneck to any of the coordinators.
* Process must be as efficient as possible to minimize rework and increase accuracy.
* Break down large chunks of work into smaller ones.  Operate in short spurts but allow for full-scope completion all at once.
* Create infrastructure for future growth and maintenance.
* Track everything.

### Kickoff
Initially, it was necessary to have a kickoff to get as many questions answered as possible, to get as many coordinators engaged as possible, and to introduce the process.  There were two such meetings scheduled of the same content, in order to allow for variation in people's schedules.  Each of these meetings was two hours long. 

This was the only large meeting we have had during the inventory process.

### Inventory Process
The inventory is broken down into three steps, with coordinators given one month to complete each step.  

![Inv One Pager](http://take.ms/lv7da)

#### Step 1
For Step 1, coordinators were asked to identify any authoritative data sources their department uses.  We identified a data source as any system that stores the primary version of data.  For example:

* Information Systems
* Databases
* Excel Spreadsheets on Shared Drives or Personal Desktops.
* Access Databases on Shared Drives or Personal Desktops.
* 3rd Party Vendors and data hosted on vendor systems.
* For a further description of what we provided as datasource definitions for coordinators, please see [Appendix Step 1]("../appendix/datasources.md").

In addition to identifying datasources, they were asked to identify:

* The person that is responsible for the technical management of the system (IT SME).
* The person that has the business level knowledge and understanding of what data is stored within the system (Business SME).
* Any potential technical changes (replacement, upgrades) the system might be scheduled for in the future.

#### Step 2
In Step 2, coordinators were asked to identify any potential datasets within the datasources from Step 1.  This was purely a brainstorming exercise designed as a away to tease out the beginnings of understanding what kind of data is stored within the data sources.  

We quickly discovered that different departments have very different cultures and styles of communications, so we provided a brainstorm guide to allow coordinators as many ways as possible to come up with datasets.  The brainstorm guide can be found in [Appendix Step 2]("../appendix/brainstorm_guide.md")

#### Step 3
In Step 3, we wanted to collect the minimum of information needed to get the gist of what the dataset was, and to prioritize it.  We asked for the following indicators:
* Brief description of data   
* Frequency of data change    
* Format  
* Existing publication    
* Link to existing publication    
* Priority/value  
* Data Classification (Public / Protected / Sensitive) 
* Data Quality Concerns   
* PRA frequency   
* Comments / Extra Info

Please review the [Appendix Step 3]("../appendix/definitions.md") for the definitions of the fields above.

Despite the fact that this is not a complete set of metadata, and doesn't conform to any recognized metadata format, we felt that it was a good level of metadata to maintain on a high level, since these things are not likely to change very often.  Once the datasets are going through the release process, they will be brought in under a more comprehensive metadata schema.  

### Technology
#### Inventory Sheets
Technology was a very necessary factor in being able to accomplish the inventory in the timeframe given, and also make sure that we met all the goals we were emphasizing.  Our choice was to use Google Drive for its ability to operate across multiple sheets, its scripting capabilities, and for its ability to be continously edited by multiple people all the time.  However, Google Drive not being standard city technology, we had a few hurdles to clear:

* The default browser on most machines has bugs when working with Google Drive
* There were concerns about maintaining proper access controls.  

We worked closely with IT to derive a process that would mitigate these issues.  They were extremely responsive and helpful, and within almost no time at all, we were able to use Google Drive for the inventory.  

By using this technology we were able to:
* Automate creation of spreadsheets per department.
* Maintain access control to all sheets while giving coordinators access only to theirs.
* Push changes to all the department spreadsheets by writing code and running it once.  
* Allowing people to edit their inventory documents simultaneously
* Aggregating and tracking progress for all departments in one place.

This is a snapshot of the control code
![Controlcode](http://take.ms/Iq918)

#### Reporting
We were able to aggregate all the department progress into one dashboard.

This is data from all the departments inventory sheets:
![invsheets](http://take.ms/Ec2Lp)

In addition, we were able to provide completion rates for each department so they can view it:
![deptdash](http://take.ms/fxSR6)

#### Dissemination
Write about gitbook
write about gitbook analytics




