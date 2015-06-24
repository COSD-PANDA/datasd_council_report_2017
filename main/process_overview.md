# Inventory 

## Purpose
The purpose of the Data Inventory is to get a bird's eye view of data we have in the City and to assist stakeholders to be able to identify data sets they consider high value for publication.  However, the inventory process was designed to begin the following processes:

* Create a base level of metadata for our City's data. [CAN WE USE ANYTHING OTHER THAN THE WORD METADATA?  I'M JUST CURIOUS IF YOU CAN REPLACE IT WITH LAYMEN'S TERMS; PLUS, METADATA SOUNDS ALL EDWARD SNOWDENY, I'M WORRIED ELECTEDS COULD UNREASONABLY FREAK OUT BY THAT TERM - IT'S ACTUALLY BEEN A SOURCE OF CONTENTION IN THE PATRIOT ACT REAUTHORIZATION]
* Identify people currently working with and managing data.
* Establish a base level inventory of the data the City has at its disposal.
* Understand the City's systems of record [AN ELECTED WILL NEED A DEFINITION OF "SYSTEM OF RECORD' OR SOME OTHER TERM] for various pieces of information. [THESE FIRST THREE BENEFITS ARE LISTED UNDER THE WHERE WE ARE SECTION OF THE PREVIOUS PAGE BUT THIS FOURTH ONE IS NOT]


## Process Overview

The first part of the inventory was to assign information coordinators from each of the 35 departments/programs we engaged to work with the Chief Data Officer.  Most departments assigned a single point of contact to work with the CDO.  However, several larger departments chose to assign multiple coordinators to represent certain divisions.  We sought out information coordinators  knowledgeable in the business level of how the department operates and how users make decisions based on that knowledge.  In total, we worked with 65 coordinators.

We designed the inventory process mindful of the following realities:

* The information coordinators' time must be used as efficiently as possible, as this process is not their primary responsibility.
* Coordinators may not have a high level of technical knowledge.
* Execution time frame is only three months.
* Coordinators do not have the same base level of understanding of what is "data".

Consequently, we emphasized the following:

* Minimize large in-person meetings, but be available for small face-to-face meetings, maintaining preference for online collaboration.
* Provide all the necessary information to everyone all the time. 
* Continously collect feedback, and be flexible enough to adjust the process.
* Say no to perfection, but increase accuracy as much as possible. [I'M NOT SURE I LIKE THE MESSAGE OF SAYING NO TO PERFECTION AND PRACTICALLY AM NOT SURE HOW YOU WOULD DESCRIBE THIS; PERHAPS A SLIGHT REPHRAZING COULD BE "dON'T LET THE PERFECT BE THE ENEMY OF THE GOOD" OR JUST DROP THIS BULLET SINCE I THINK YOU CAPTURE IT IN OTHER BULLETS]
* Automate repeatable tasks and allow technology to increase execution velocity.
* Technology or the CDO must not be a bottleneck to any of the coordinators.
* Process must be as efficient as possible to minimize rework and increase accuracy. [THERE'S INCREASE ACCURACY AGAIN, SEE MY COMMENT ABOVE]
* Break down large chunks of work into smaller ones.  Operate in short spurts but allow for full-scope completion all at once.
* Create infrastructure for future growth and maintenance.
* Track progress. [EVERYTHING IS pra HEAVEN]

### Kickoff
Performance & Analytics conducted two kickoff meetings with the same content to field preliminary questions, engage as many coordinators as possible, and introduce the process.  These 2-hour meetings were the only large meetings held during the inventory process.

### Inventory Process [I THINK WE NEED TO DO A SPOT CHECK OF PAST VS PRESENT TENSE; THOSE ARE BEING USED INTERCHANGEABLEY]
We broke the inventory into three steps, with coordinators given one month to complete each step.  

![Inv One Pager](http://take.ms/lv7da)

Each department was given a spreadsheet to fill out with all the steps and explanations built into the sheet.  

#### Step 1
For Step 1 we asked coordinators to identify any authoritative data sources their department uses.  We identified a data source as any system that stores the primary version of data.  For example:

* Information Systems
* Databases
* Excel Spreadsheets on Shared Drives or Personal Desktops
* Access Databases on Shared Drives or Personal Desktops
* 3rd Party Vendors and data hosted on vendor systems

For a further description of what we provided as datasource definitions for coordinators, please see [Inventory Step 1](../core_inventory/datasources.html).

In addition to identifying datasources, coordinators were asked to identify:

* The person that is responsible for the technical management of the system (IT SME).
* The person that has the business level knowledge and understanding of what data are stored within the system (Business SME).
* Any potential technical changes (replacement, upgrades) the system might experience in the future.

#### Step 2
In Step 2 coordinators identified potential datasets within the datasources from Step 1.  We designed this exercise to begin to explore what kind of data are stored within the data sources.  

Because each department has its own culture and style of communicating, we provided a brainstorm guide to allow coordinators to come up with datasets in as many ways as possible.  The brainstorm guide can be found in [Inventory Step 2](../core_inventory/brainstorm_guide.html).

#### Step 3
In Step 3 we collected the minimum amount of information needed to get a basic understanding of datasets to ultimately assist the City in prioritizing them for release.  We asked about the following indicators:
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

Please review the [Inventory Step 3](../core_inventory/definitions.html) for the definitions of the fields above.

Although this does not represent a complete set of metadata, and does not conform to any recognized metadata format, it nonetheless provides us a base level of information at a high level, since these elements are unlikely to change frequently.  As datasets go through the release process, they will be brought in under a more comprehensive metadata schema.  [SORT OF QUESTIONING THE NEED FOR THE PREVIOUS 2 SENTENCES]

### Technology
#### Inventory Sheets
Working closely with the Department of Information Technology, we took advantage of technology to complete the inventory in the required timeframe.

Through the use of technology in the inventory process, we were able to facilitate the following:
* Automate creation of spreadsheets per department.
* Maintain centralized access to all sheets while giving coordinators access to their own.
* Increase our felxiblity to quickly adjust to feedback by writing code that made changes to all the department spreadsheets at once.
* Allow coordinators to edit their inventory documents simultaneously. [WHAT DOES THIS MEAN?]
* Aggregate and track progress for all departments in one location.
* Work with our constraints and emphasize the efficiencies we needed. [THIS BULLET IS THE LEAST DESCRIPTIVE TO ME, SO DROP OR ADD MORE CONTEXT]

Allowing technology not to be a roadblock gave us a lot of flexibility.  Some comments we received from coordinators:

    "Thank you for being patient and going with the flow in terms of our workloads at our departments." [IF WE HAVE ONLY ONE COMMENT, LET'S STRIKE THIS SENTENCE AND THE PREVIOUS TWO]

#### Reporting
To facilitate continuous reporting and track progress for all departments simultaneously, we built a central dashboard:
![CDO Dashboard](http://take.ms/BGPG1).  

However, department coordinators did not need the same level of depth, so we provided them a simplified interface:
![deptdash](http://take.ms/fxSR6)

#### Dissemination of information.
One of our main goals was to make online resources available to all coordinators all the time.  For disseminating the information, we chose to use a technology called GitBook which is an open source publishing workflow system.  It also allowed us to continuously incorporate feedback and update the instructions without having to re-email them out to coordinators.

In addition to the benefit of receiving continuous feedback from City staff, we also were able to analyze how users were using the documents.  By continuously tracking our documentation's effectiveness, we could issue targeted clarifications, and improve internal communication around Open Data.  [IS THERE AN EXAMPLE OF THIS WE COULD INCLUDE?]

Note: the metric screenshots below include the entire inventory time frame, though we used smaller intervals throughout the process.

Monitoring the navigation flow of users:[FOR THIS AND THE NEXT TWO PICTURES, I FEEL WE NEED A BIT MORE CONTEXT; PARTICULARLY TERMS LIKE NAVIGATION FLOW OR BOUNCE RATES NEED EXPLANATION IN LAYMENS TERMS]
![gaflow](http://take.ms/0Hi0H)

Tracking bounce rates, active users, most active pages, and most active exit pages:
![gadash](http://take.ms/HjbwW)

Pageviews per session, returning users, etc for the inventory documentation:
![gashot](http://take.ms/xpqQr)

#### Compiling
Compilation and reporting of the inventory data across the department spreadsheets is handled by an R Script that pulls data from all spreadsheets, aggregates, and cleans it.  In order for the inventory to be effective, it must be continuously updated, and these tools allow us to do so now and into the future.

#### Additional Sources
In addition to the human generated inventory, we have worked closely with the Department of IT to take advantage of available technological data collection methods.  We will rely on the following sources to verify and augment the inventory data over the coming year:

* List of GIS Data
* List of Business Warehouse Reports
* List of Data provided by CGI
* Automated scanning of sandiego.gov for potential datasets




