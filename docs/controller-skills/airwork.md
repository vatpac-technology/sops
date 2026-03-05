---
title: Airwork
---

--8<-- "includes/abbreviations.md"

Not all flights online consist of an aircraft flying between airports. **Airwork** refers to any aerial operation that doesn't involve simply going from A to B. Providing control services to aircraft performing airwork requires specific skills and procedures, but offers a unique and rewarding experience for both pilots and controllers.

!!! warning
	Certain types of airwork, including search and rescue, firefighting, and other emergency operations are restricted under the [VATSIM Code of Conduct](https://vatsim.net/docs/policy/code-of-conduct){target=new}. See [Military and Special Operations](#military) for more information.

## Area of Operations
Airwork must be conducted within a defined **area of operation**. This is genenerally nominated by the pilot when first passing airwork details, but can be adjusted or alternately defined by the controller when necessary. An area of operation should be defined with both **lateral** and **vertical** limits.

!!! example
    Lateral limits can be defined in a number of ways, most commonly:
    
    - Radius from a fix, navaid, coordinate, or aerodrome. (e.g. *within a 20nm radius of KII*)
    - a [SUA] Area. (e.g. *within the D205 danger area*)
    - a polygon defined by a set of fixes, navaids, or coordinates. (e.g. *within an area between HID VOR-ZIN-YSII-1000S14200E*)
    - a visual topographical feature (e.g. *within Lake Eyre*)

### Uncontrolled Airspace
IFR Aircraft, and VFR aircraft receiving an identification service must the controller of their intentions prior to commencing airwork.

!!! phraseology
    *PPB is an IFR aircraft intending to perform a series of practice approaches at YPKU - an uncontrolled aerodrome*
    **PPB**: "PPB, with airwork details"  
    **KIY**: "PPB"  
    **PPB**: "PPB, will be conducting airwork within a 20nm radius of YPKU, not above A040, ops normal time 50."  
    **KIY**: "PPB, no reported IFR traffic"  
    **PPB**: "PPB"

### Controlled Airspace
Aircraft must obtain clearance to perform airwork within CTA, even when airwork details are included in their flightplan. Clearances must include **lateral** and **vertical** restrictions.

!!! phraseology
    *A2B is an IFR aircraft intending to perform airwork within 10nm of WG VOR, A090-A100.*
    **A2B**: "A2B, with airwork details"  
    **BLA**: "A2B"  
    **A2B**: "A2B, request airwork within a 10nm radius of WG, between `A090` and `F130`, for the next 15 minutes."  
    **BLA**: "A2B, cleared to operate within a 10nm radius of WG, `A090` to `F130`."  
    **A2B**: "Cleared to operate within a 10nm of WG, `A090` to `F130`, A2B"
    
!!! tip
    Before providing a clearance to perform airwork to an aircraft, it is good practice to take extra time to assess to potential for conflicts, and determine if any coordination is required with adjacent positions.

#### Partially Controlled Airspace
Aircraft should only receive clearance to perform airwork within CTA. When an aircraft requests clearance to perform airwork in an area partially CTA and OCTA, controllers should provide clearance only for controlled portion of the airspace, and provide traffic information for the uncontrolled portion.

!!! phraseology
    *MDIA403 is an IFR helicopter intending to perform airwork within 4nm of DRLD, `SFC` to `A050`; CTA exists above `A035`.*
    **MDIA403**: "MDIA403, with airwork details"  
    **BDN**: "MDIA403"  
    **MDIA403**: "MDIA403, request airwork within a 4nm radius of DRLD, not above `A050`, for the next 30 minutes, ops normal time 45."  
    **BDN**: "MDIA403, cleared to operate within a 4nm radius of DRLD, between `A035` and `A050`, no reported IFR traffic"  
    **MDIA403**: "Cleared to operate within a 4nm radius of DRLD, `A035` to `A050`, copy traffic, MDIA403"

### Ops Normal
If an aircraft is to be conducting airwork that does not require them to talk to ATC for an extended period (30 mins or more), an "operations normal" time should be agreed upon: a time by which an aircraft is required to "check-in" with ATC by to confirm that the flight is still operating normally.

!!! tip
    The operations normal time can be set as a timer on the aircraft by right clicking on the callsign in the aircraft's tag, and selecting the agreed time. A 'SAR' alert will trigger when the timer expires, prompting you to follow-up with the aircraft if they haven't checked in.

If the pilot does not volunteer an operations normal time, provide them with one that is on an even hour or half hour, anywhere from thirty to sixty minutes from the current time.
    
!!! phraseology
    Time is 0648Z  
    **OBF**: "OBF will be conducting airwork within a 20nm radius of YBLT, not above A050 for the next 60 minutes"  
    **YWE**: "OBF, no reported IFR traffic, call ops normal time 30."  
    **OBF**: "Ops normal time 30, OBF"

## Flight Plan Remarks
Aircraft planning to perform airwork should declare their intentions in the remarks of their flight plan. This should be indicated using the DLE/ format: DLE/*Waypoint**Delay in HHMM*. Additionally, for [practice instructment approaches](#practice-instrument-approaches) and [special operations](../military/#special-operations) a remark should be included to communicate this request.

!!! example
    A pilot is conducting a training flight around the Melbourne Basin, with practice approaches at YMEN (for 10 min), YMAV (for 20 min) and YMMB (for 30 min).  
    **Filed Route**: `DCT ESDAN DCT AV DCT MB DCT`  
    **Remarks**: `DLE/ESDAN0010 AV0020 MB0030 RMK/ESDAN26ILS AV36VOR MBNDBA`

!!! example
    A pilot is conducting [Search and Rescue](../military/#search-and-rescue) operations within a 10nm radius of a position defined as **WG288030**, for 1 hour and 30 min.  
    **Filed Route**: `DCT WG288030 DCT`  
    **Remarks**: `DLE/WG2880300130 RMK/SAR OPERATIONS WI 10NM OF WG288030`
    
### Special Remark Codes
Remark codes are also used to advise intentions to perform specific types of airwork that may not be associated with a delay. Most are not relevant in the virtual environment, however there are some that you may encounter online.

| RMK/ Code  | Description                      | Format                     |
| ---------- | -------------------------------- | -------------------------- |
| SVY        | [Aerial Survey](#aerial-surveys) | SVY*(Level)* (e.g. SVY060) |
| AVM        | Abrupt Vertical Manoeuvres       | AVM*(Significant Point)(Upper Level)* (e.g. AVMPEGSUA095) |
| NOCOM      | [Non-Continuous Communication](../military/#nocom-operations) | |
| MILSPECREQ | Special Military Requirements, e.g. [MARSA](../military/#marsa-operations) | |

### Practice Instrument Approaches
A practice instrument approach is simply an aircraft conducting an instrument approach with no intention of landing. Pilots will frequently request lesser-used procedures, such as VOR or NDB approaches, than would otherwise be used in normal operations.

Outside controlled airspace, providing a simple traffic statement (as in the [example above](#uncontrolled-airspace)) gives the pilot sufficient information to conduct the planned approaches safely. Within controlled airspace, a pilot must receive an explicit approach clearance.

!!! phraseology
    **QRS**: "Melbourne Approach, QRS, request direct MOSVO for the practice YMEN LOC Runway 26 Approach"  
    **MAE**: "QRS, Melbourne Approach, cleared LOC approach. At the minima, fly published missed approach."
    **QRS**: "Cleared LOC approach. At the minima, fly published missed approach, QRS."    

!!! tip
    Practice instrument approaches can introduce vexing complications when conducted in controlled airspace. When receiving a request for practice instrument approaches from a pilot, controllers should take time to consider all aspects of the procedure.
    
    Some of the **key considerations** include:
    
    - **Approach Path**: How will the aircraft join the approach? What is the most appropriate IAF? Is a [sector entry](#sector-entries) required? What is the missed approach path?
    - **Airspace**: What are the classes of airspace involved? 
    - **Separation**: Is there separation assurance from other traffic on all legs of the approach? 
    - **Coordination**: Is any coordination required with adjacent units?
    - **Workload**: Does the current workload allow you to facilitate this request? Is there an imminent increase in traffic that could cause you to be overwhelmed?
    
    After giving an aircraft clearance to perform a practice instrument approach, maintain your situational awareness with good client usage:
    
    - **Label Data**: Use label data to indicate the approach tye (e.g. *VORA*, *ILSZ*)
    - **Cleared Flight Level**: Adjust the aircrafts CFL to a block altitude from `000` to the cleared missed approach altitude (e.g. `000-030`).
    - **Text Labels**: Consider adding a text label (default shortcut `F6`) to notate any non-standard instructions or other relevant information.
    
#### Sector Entries
A **Sector Entry** is a procedure for aligning an aircraft with the final approach path by performing a procedural turn to enter published holding pattern, often over the IAF.

<figure markdown>
![Sector Entry Diagram Example](img/sector_entry_diagram.png){ width="800" }
  <figcaption>Sector Entry Diagram Example</figcaption>
</figure>

Sector Entries are generally required used when an aircraft would need to turn greater than 30° from the first track of the procedure. If there is any uncertainty, it is still good practice to confirm with the pilot if a sector entry is required.

!!! phraseology
    **YNJ**: "Adelaide Approach, YNJ, Requesting Practice YPPF VOR-A Approach"
    **AAE**: "YNJ, will you be requiring a sector entry?"  
    **YNJ**: "Affirm will require a sector entry, YNJ"  
    **AAE**: "YNJ, copy, make sector entry, cleared VOR-A Approach. Report established."  
    **YNJ**: "Make Sector Entry, cleared VOR-A approach, wilco, YNJ"

#### DME and GNSS Arrivals
A **DME** or **GNSS** arrival is a procedure by which aircraft follow charted descent guidance along a specified track or sector until they reach the the visual circling area.

<figure markdown>
![GNSS Arrival Diagram Example](img/gnss_arrival_diagram.png){ width="800" }
  <figcaption>GNSS Arrival Diagram Example</figcaption>
</figure>

!!! phraseology
    **CS1**: "WXY, cleared DME arrival"
    **WXY**: "Cleared DME arrival, WXY"

Aircraft cleared for a DME or GNSS arrival are permitted to manoeuvre within the circling area to position the aircraft on final for landing. When an aircraft cannot be cleared for the entire approach, the aircraft must be issued with a specific descent "not below the DME/GNSS steps".

    **CS1**: "EFG, descend `A030`, not below the DME steps."  
    **EFG**: "Descend `A030` not below the DME steps, EFG."  

### Aerial Surveys
<figure markdown>
![Aerial Survey Example](img/survey_ops_example.png){ width="800" }
  <figcaption>Aerial Survey Example</figcaption>
</figure>

Aerial Survey Work involves flying in a series of parallel tracks in a pattern similar to that shown above. Pilots will often request oddly specific altitudes (e.g. `F143`) whilst doing these operations. Survey work can A lot of information is required to have the required situational awareness to facilitate aerial survey work, and it is important to cooperate with the pilot on this. The best thing the pilot can give you is a survey map showing their area of operations.

<figure markdown>
![Aerial Survey Map Example](img/svymap.png){ width="800" }
  <figcaption>Aerial Survey Map Example</figcaption>
</figure>

The numbers signify "Runs" that the survey aircraft can be cleared for. The pilot may need to do these runs in a particular order and direction and at a particular altitude, though they also may have some flexibility. It's good practice to clarify the requirements of the airwork to understand the separation required.

#### Initial Call
!!! phraseology
    **MZI**: "Melbourne Centre, MZI, Conquest, POB 1, IFR, Taxis Runway 36 at YMNG for Survey Operations"  
    **ELW**: "MZI, Melbourne Centre, Squawk 3601, No Reported IFR Traffic"  
    **MZI**: "Squawk 3601, MZI"

#### Assessment
Assess for:

- **Airspace** (What classes of Airspace will the aircraft be operating in? Will the aircraft require a clearance?)  
- **Traffic/Separation**  
- **Coordination** (What adjacent units will be affected?)

#### Situational Awareness Tools
Dropping Text-on-Screen of the letter "X" at the vertices of the rough area in which the aircraft will be operating is probably the best way to give yourself some situational awareness, however everything is personal preference. Remember that you are only needing to seperate from the survey aircraft, so it's ok if the locations are a little rough

#### Coordination
In this example, lets say the aircraft is intending to operate at F168. Boundary Coordination to ML TCU is not technically required, however, they have a voiceless coordination to you for aircraft assigned the DOSEL and NONIX SID, Climbing to F240. This would place YMML departures directly in conflict with the survey aircraft. A negotation should be made to assure separation between departures and the survey aircraft.

!!! phraseology
    <span class="hotline">**ELW** -> **MDN**</span>: "For Ident, MZI, conducting Survey work between DOSEL and BOGES at F168. All departures via NONIX and DOSEL to have restriction to reach F180 by 30 miles ML, or assigned level at or below F150, until advised"  
    <span class="hotline">**MDN** -> **ELW**</span>: "Copied all departures to be assigned restriction to reach F180 by 30 miles ML, or F150 or lower, reference MZI"

#### Clearance (if required)
Start by clearing the aircraft to where they need to go

!!! phraseology
    **ELW**: "MZI, Cleared directly to the start of Run 1, Climb to F168"  
    **MZI**: "Cleared directly to the start of Run 1, Climb to F168, MZI"

Then when ready, clear the aircraft for the survey work

!!! phraseology
    **ELW**: "MZI, Cleared for Runs 1 through 4, Report at the completion of each run"  
    **MZI**: "Cleared for Runs 1 through 4, Wilco, MZI"

!!! tip
    Continue to ask the pilot questions in order to know exactly what they are doing. For separation assurance with the departing YMML traffic, you could ask *"Confirm you will be able to remain outside 40 DME ML?"*. You could ask the pilot what kind of turn they will be making at the completion of each run. You could also instruct the pilot to maintain a heading on the completion of a run for separation purposes.

### Parachute Operations
Pilots on the network may choose to simulate Parachute Operations (PJE).  
There are lots of different variables at play when considering how to handle parachuting operations, such as:

- Is the aircraft VFR or IFR?  
- Which class(es) of airspace is the aircraft operating in?  
- What height will the aircraft be dropping from?  
- How busy are you?  

#### Initial Call
The exact nature of Parachute Operations can vary significantly at different drop zones around the country, so it's very important to ascertain the pilot's exact intentions prior to them entering controlled airspace.

!!! phraseology
    **DJV**: "Sydney Departures, Caravan, DJV, Airborne YSHL for Parachute Operations overhead Flagstaff Point, Requesting F140"  
    **SDS**: "DJV, Sydney Departures, Standby"

#### Tag
The aircraft may or may not have filed a flightplan. Search in the Preactive window or Flight Plan Window for their callsign. If you find a flight plan, activate it, and pass the aircraft their squawk code.  
If there is no flight plan, simply create a Quicktag for the aircraft, and assign them the displayed code.

!!! phraseology
    **SDS**: "DJV, Sydney Departures, Squawk 3601"  
    **DJV**: "Squawk 3601, DJV"

#### Assessment
<figure markdown>
![YSHL Area](img/pjeshl.png){ width="600" }
  <figcaption>Flagstaff Point position reference YSHL</figcaption>
</figure>

Assess for:

- **Airspace** (What classes of Airspace will the aircraft be operating in? Will the aircraft require a clearance?)  
- **Traffic/Separation**  
- **Coordination** (What adjacent units will be affected?)

In this case, the aircraft will be operating in Class G and Class C airspace, therefore will need a clearance. Boundary Coordination will need to be completed to **SAS**.

#### Situational Awareness Tools
Many drop zones around the country have associated [Danger Areas](../sua/#danger-areas) that can be seen on VTC, VNC, TAC or ERC-L Charts. It is good practice to activate these Danger Areas via the **Restricted Areas** window in vatSys, for situational awareness.

#### Coordination
Conduct Coordination to any affected adjacent units as required

!!! phraseology
    <span class="hotline">**SDS** -> **SAS**</span>: "For Ident, DJV, conducting Parachute Operations at Flagstaff Point, do you have any restrictions or requirements?"  
    <span class="hotline">**SAS** -> **SDS**</span>: "DJV, no restrictions, no requirements"

#### Clearance (if required)
Best practice is to clear the aircraft to operate within a reasonably sized radius area of the drop zone, 5nm for example. If the pilot has special requests to add to the clearance, it is their responsibility to communicate it to you. 

!!! phraseology
    **SDS**: "DJV, Cleared to operate within a 5nm radius of Flagstaff Point, Climb to F140. Report Ready for Drop and Descent"  
    **DJV**: "Cleared to operate within a 5nm radius of Flagstaff Point, Climb to F140, Wilco, DJV"

Ensure you maintain separation assurance with other aircraft in the area. There is nothing wrong with assigning an interim level, holding them at a particular level, or vectoring them away from their intended area of operation, in order to facilitate the movements of other traffic.

#### Broadcasts
Throughout the Parachute operations, you can expect the PJE aircraft to make multiple broadcasts on your frequency to traffic in the area. Unless the aircraft addresses you directly (eg *"Sydney Departures and traffic in the Wollongong area"*), there is no need to respond to these traffic broadcasts

!!! phraseology
    **DJV**: "Traffic in the Wollongong city area, DJV is a Caravan, 5 minutes to Parachute drop from flight levels overhead Flagstaff Point, expect 6 canopies, Traffic Wollongong city area"

#### Drop and Descent
!!! phraseology
    **DJV**: "DJV, Broadcasts complete, Request Drop and Descent"  

You are required to separate all aircraft from a **2nm Radius** of the Drop Zone (ie, the appropriate radar standard, 3nm for TCU, 5nm for Enroute, **Plus** 2nm Radius of the Drop Zone), once a drop clearance has been given. This is because you are no longer just separating from the aircraft, but the Parachutes themselves as well. Your responsibility for separating from the Parachutes terminates once the pilot reports the chutes are OCTA.

Once again, when giving drop and descent clearance, consider giving an interim level, or a heading, if required for separation.

!!! phraseology
    **SDS**: "DJV, clear to drop, leave controlled airspace descending, not below parachutists, tracking DCT YSHL, No Reported IFR Traffic. Report parachutists OCTA."  
    **DJV**: "Clear to drop and leave controlled airspace descending, not below the parachutists, tracking DCT YSHL, Wilco, DJV."  

!!! note
    *"Not below parachutists"* is so that you can separate from the last level vacated by the aircraft. If you do not instruct the aircraft to descend not below the parachutists, then you would need to separate all the way from the drop height (in this case, F140) until the parachutists are reported as OCTA.

!!! phraseology
    **DJV**: "DJV, Parachutists and aircraft OCTA."  
    **SDS**: "DJV, Identification terminated, Frequency change approved"  
    **DJV**: "DJV"

!!! note
    "Frequency change approved" is given in this instance, as DJV is now a VFR aircraft in Class G airspace. DO NOT approve a frequency change to any PJE aircraft in Class E airspace, or any IFR PJE aircraft.

#### IFR Operations
Most procedures are the same for IFR aircraft, just remember that the situation changes when Class E airspace is involved, as it is now Controlled, and you must separate other IFR aircraft from the PJE aircraft and the chutes inside Class E airspace. As a controller, remember that you need to hold SARWATCH over the IFR aircraft in all Classes of airspace, until they cancel their SARWATCH or downgrade VFR.

#### OCTA Operations
VFR PJE aircraft operating wholly within Class G or Class E airspace are still required to make broadcasts on frequency, and they are entitled to a traffic statement for Drop and Descent.