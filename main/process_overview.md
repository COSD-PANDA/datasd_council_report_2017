# Inventory 

## Note of Acknowledgement.
The base structure for the process was very much inspired by that of San Francisco's inventory, and it's important to acknowledge the wonderful work Joy Bonaguro, the CDO of San Francisco did in creating this process. A blog post about the process can be seen at the [DataSF Blog](http://datasf.org/blog/5-ways-to-scale-mountain-of-data/)

## Purpose
The purpose of the Data Inventory is to get a bird's eye view of data we have in the city and to assist stakeholders like the Mayor, Council, the public to be able to identify data sets they consider high value for publication. However, the inventory process was designed to have the following additional benefits:

* Begin to create a base level of metadata for our city's data.
* Begin to identify people currently working with and managing data.
* Begin to establish a base level inventory of the data we have as a city.
* Understand what systems of record we have for various pieces of information.


## Process Overview

To view the entire guide, please visit the [Data Coordinators Handbook](http://sddc.herokuapp.com/)

The first part of the inventory was to assign information coordinators from each department to work with the Chief Data Officer.  Several larger departments chose to assign multiple coordinators since these people knew their divisions best.  However, most departments assigned a single point of contact to work with the CDO.  It was important for information coordinators to be knowledgeable in the business level of how the department operates, since they would oftentimes need to make decisions based on that knowledge.

There were a total of 35 departments in the inventory, and a total of 65 coordinators.  

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

Each department is giving a Google Drive spreadsheet to fill out with all the steps and explanations built into the sheet.  

#### Step 1
For Step 1, coordinators were asked to identify any authoritative data sources their department uses.  We identified a data source as any system that stores the primary version of data.  For example:

* Information Systems
* Databases
* Excel Spreadsheets on Shared Drives or Personal Desktops.
* Access Databases on Shared Drives or Personal Desktops.
* 3rd Party Vendors and data hosted on vendor systems.
* For a further description of what we provided as datasource definitions for coordinators, please see [Appendix Step 1](../appendix/datasources.html).

In addition to identifying datasources, they were asked to identify:

* The person that is responsible for the technical management of the system (IT SME).
* The person that has the business level knowledge and understanding of what data is stored within the system (Business SME).
* Any potential technical changes (replacement, upgrades) the system might be scheduled for in the future.

#### Step 2
In Step 2, coordinators were asked to identify any potential datasets within the datasources from Step 1.  This was purely a brainstorming exercise designed as a away to tease out the beginnings of understanding what kind of data is stored within the data sources.  

We quickly discovered that different departments have very different cultures and styles of communications, so we provided a brainstorm guide to allow coordinators as many ways as possible to come up with datasets.  The brainstorm guide can be found in [Appendix Step 2](../appendix/brainstorm_guide.html)

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

Please review the [Appendix Step 3](../appendix/definitions.html) for the definitions of the fields above.

Despite the fact that this is not a complete set of metadata, and doesn't conform to any recognized metadata format, we felt that it was a good level of metadata to maintain on a high level, since these things are not likely to change very often.  Once the datasets are going through the release process, they will be brought in under a more comprehensive metadata schema.  

### Technology
#### Inventory Sheets
Technology was a very necessary factor in being able to accomplish the inventory in the timeframe given, and also make sure that we were able to overcome roadblocks and achieve our goals.  

Our choice was to use Google Drive for its ability to operate across multiple sheets, its scripting capabilities, and for its ability to be continously edited by multiple people all the time.  

However, Google Drive not being standard city technology, we had a few hurdles to clear:

* The default browser on most machines has bugs when working with Google Drive
* There were concerns about maintaining proper access controls.  

We worked closely with IT to derive a process that would mitigate these issues.  They were extremely responsive and helpful, and within almost no time at all, we were able to use Google Drive for the inventory with all the coordinators.

By using this technology we were able to:
* Automate creation of spreadsheets per department.
* Maintain access control to all sheets while giving coordinators access only to theirs.
* Push changes to all the department spreadsheets by writing code and running it once, allowing us to quickly adjust to feedback.
* Allowing people to edit their inventory documents simultaneously
* Aggregating and tracking progress for all departments in one place.
* Work with our constraints and emphasize the efficiencies we needed.

The control code, while not the most beautiful, is available on [github](https://gist.github.com/MrMaksimize/95ea360c79293fa8c1e8)

Allowing technology not to be a roadblock gave us a lot of flexibility.  Some comments we received from coordinators:

    "Thank you for being patient and going with the flow in terms of our workloads at our departments."

#### Reporting
In order to make sure that the CDO is not a bottleneck and we had continous reporting, all the reporting was aggregated up to a central dashboard.  Therefore, we were able to track progress for all departments simultaneously:
![CDO Dashboard](http://take.ms/BGPG1).  

However, the department coordinators did not need something as in depth, so they were given access to a simplified interface:
![deptdash](http://take.ms/fxSR6)

#### Dissemination of information.
This was probably the most challenging part of the inventory.  Departments around the city are so different, with different people and diverse cultures.  They need to be communicated to in their way, on their level.  We chose a technology that would allow us to continously update our documentation on the fly as needed, and analyze how well our documentation was working. 

One of the points we wanted to emphasize was that all information should be available to all coordinators all the time.  For disseminating the information, we chose to use a technology called GitBook which is an open source publishing workflow system.  The data coordinators handbook can be seen online: [Data Coordinators Handbook](http://sddc.herokuapp.com/).  

This allowed us to continously incorporate feedback and update the instructions without having to re-email them out to people.

Besides getting continous feedback from people, we were also getting continous feedback from their behaviour.  By continously being able to track how effective our documentation was and how people were using it, we were able to target and clarify things that did not make sense, and use the things that worked to understand what way of communication was best.  

Note: the screenshots for the metrics are in week time intervals, and for the whole period of the inventory.  Obviously, for monitoring we would use much smaller intervals.

Monitoring the navigation flow of various users:
![gaflow](http://take.ms/0Hi0H)

Tracking bounce rates, active users, most active pages, and most active exit pages:
![gadash](http://take.ms/HjbwW)

Pageviews per session, returning users, etc for the inventory documentation:
![gashot](http://take.ms/xpqQr)

#### Compiling
Compilation and reporting of the inventory data across the department spreadsheets is handled by an R Script that pulls data from all Google Spreadsheets, aggregates and cleans the data.  In order for the inventory to be effective, it must be continously updated, and these tools allow us to do so.

#### Additional Sources
In addition to the human generated inventory, we have worked closely with IT to use any technological data collection methods that are available.  The sources that supplement the inventory are as follows.  They will be used to verify and augment the inventory data to the extent possible:

* List of GIS Data.
* List of Business Warehouse Reports
* List of Data provided by CGI
* Automated scanning of sandiego.gov for potential datasets.




