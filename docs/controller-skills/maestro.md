---
title: MAESTRO
---

--8<-- "includes/abbreviations.md"

# MAESTRO
MAESTRO (pronounced my-stro), also and otherwise known as The Flow Management System (TFMS), is an arrival manager used to generate a sequence of aircraft inbound to an airport from multiple directions.

MAESTRO can be viewed by accessing the website [here](https://maestro.vatpac.org) or via the link within vatSys.

MAESTRO is a semi-automatic system, and will manage a small number of arrivals generally without intervention. When the number of arriving aircraft increases, a flow controller is required to 'drive' the system, make adjustments as required, and communicate sequencing information to the respective ENR controllers.

MAESTRO is not a very useful tool in the TMA, however it allows the TCU controllers to have situation awareness on the flow of inbound aircraft from enroute sectors.

## Limitations

VATPAC's implementation of MAESTRO, whilst good enough for VATSIM, has a number of limitations compared to the real world system.

It will not:  

- attempt to organise the sequence in a way to minimize total delay.  
- provide for dependent or semi-dependent runway modes (when multiple runways are used for arrivals) such as  
    - Parallel runway operations at Brisbane and Sydney.  
    - LAHSO at Melbourne (34/27).  
- provide any wake turbulence seperation.

## How it works

### The Basics

A Feeder Fix (FF) is a common waypoint that aircraft will 'merge' to from a certain direction, commonly (but not always) the first waypoint on a STAR.

A runway must be specific in MAESTRO. A runway will have a minimum arrival rate (preset and not configurable), usually between 120 and 180 seconds (can be more or less). This is the minimum time between arrivals.

MAESTRO also holds information such as distance from the feeder fix to the runway, for the given configuration. This allows MAESTRO to determine a estimated landing time and an estimated feeder fix time for all inbound aircraft.

From these times, MAESTRO will use this minimum arrival rate to generate a sequence of aircraft, based on their current estimated landing times.

If 2 aircraft have an estimated landing time that is too close, one aircraft will be delayed and have a new schedule arrival time. This new landing time will also be reflected in a delay at the feeder fix, which is how the enroute controllers sequence the aircraft (either by speed, vectors, holding, or other means).

### The Ladder

The "ladder" is referring to the display of aircraft in the MAESTRO system, with their position on the ladder their landing or feeder fix time (depending on the viewing mode). This is essentially a "time ladder".

If you are in the "sector" view, you will see aircraft on the ladder at their feeder fix schedules time of arrival (FF STA). Note, you will only see the relevent feeder fixes for the sectors that you have selected.

If you are in the "runway" view, you will see aircraft on the ladder at their landing schedules time of arrival (RWY STA). You will be able to view all runways for the aerodrome in this view.

Note - The runway view is the best view for the flow controller, and the sector view is the best view for enroute controllers.

Each line on the ladder shows information about arriving aircraft. From the centre of the ladder outwards, the following information is available.

- STA FF (in sector view only)
- Assigned Runway
- Callsign (colour of callsign indicated state as per information below)
- Delay remaining
- Total delay

## Aircraft Stability

An aircraft will begin in the MAESTRO ladder when their ETA is within 60 minutes from the FF. They will be classified as `unstable`, and show as yellow on the ladder.

Unstable aircraft will be re-sequenced every 15 seconds. You should not apply any delaying action to an aircraft that is unstable, as their position in the sequence is not yet confirmed. Early delays could result in that aircraft receiving further (un-needed) delays from MAESTRO.

Once an aircraft is within 25 minutes from the FF, they will be classified as `stable`, and show as dark blue on the ladder.

Stable aircraft will only be further delay by new aircraft entering the sequence from airports that are 'close' to the destination airport. For example, most jets between Sydney to Melbourne will be 'stable' prior to passing abeam Albury, however a departure from Albury could still delay these aircraft. Note, this is currently a manual process to delay the aircraft.

Finally, when an aircraft is within 15 minutes from the FF, they will be classified as `superStable`, and show as white on the ladder.

SuperStable aircraft will not be delayed for any reason other than congestion in the TCU (due to go-arounds, etc). Note, this is currently a manual process to delay the aircraft.

If the flow controller decides on a different sequence to MAESTRO, then they may manually enter a landing time in the system, this will `freeze` the aircraft and they will show light blue on the ladder. A frozen aircraft will not be delayed for any reason, unless determined by the flow controller.

### Interactive Options

The flow controller can interact with aircraft on the ladder if they have delegated themselves as the flow controller.

The best view for the flow controller is the runway view. From this view they can:

- adjust an aircrafts landing time.
- delay the entire sequence after a specific aircraft, for a desired amount of time.
- manually adjust an aircrafts runway (if the automatically detected runway is wrong, or you want to see their estimated landing time on a new runway).
- desequence an aircraft (remove it from an aircraft).
- insert an aircraft at any time, provided that the aircraft can be inserted at that time (minimum landing time before and after)
- insert a slot (which blocks aircraft from being allocated this landing time). This is useful for additional space when it may be required for wake-turbulence or slower-preceeding.


The flow controller can also make changes from the sector view, but this is not recommended.

From the desequenced view (DESQ), the flow controller can view aircraft that could not be automatically fit into the sequenced, and find a place for them to be slotted in. this may require additional delaying of aircraft behind (ideally only stable aircraft, as per above).

