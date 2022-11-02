---
title: Sequencing
---

--8<-- "includes/abbreviations.md"

# Sequencing

It's all well and good maintaining separation standards in your airspace, but if you handoff 2 aircraft to ML_APP overhead LIZZI at the same speed, 1000ft apart, you're not going to make any friends. By default, aircraft must be sequenced **2 minutes** apart at the **Feeder Fix** (generally the first waypoint of the STAR).  

It's important to remember that aircraft aren't just arriving from your sector, they can be coming in from all directions at similar times. **MAESTRO** is a tool used to help aid with sequencing (what time do YOU need to get the aircraft to the feeder fix to avoid TCU congestion). You can find more info [here](https://sops.vatpac.org/controller-skills/maestro){target=new}

In real life, controllers have the luxury of putting a fair bit of the onus of forming the sequence on the pilots, by issuing instructions like *"Adjust speed to cross RIVET at time 52 at 250kts in to published speeds"*. On VATSIM, every pilot may be using a different clock, potentially even different weather, and the pilot may simply not be proficient enough to meet a FF time. As such, all sequencing is best left in the hands of you, the controller.

There are multiple tools a controller can use to create and maintain a sequence.

## Speed Control
Speed Control is simply slowing aircraft down and speeding aircraft up as required. As a general rule of thumb, Speed Control is most useful to achieve anywhere between a 1 minute expedition, to a 2 minute delay (depending on how far out from the FF).

### General Flow Speeds
For information only, the following approximate time gains and losses achieved by speed control.

| IAS Restriction | JET Gain / Loss | Others |
| ---- | -------- | -------|
| 320+ | - 2 MIN |  |
| 300  | - 1 MIN |  |
| 280  | - 0 MIN |  |
| 270  | + 1 MIN |  |
| 250  | - 2 MIN |  |
| 230  | - 3 MIN |  |
| 210  |  | +1 MIN |
| 190  |  | +2 MIN |
| 180  |  | +3 MIN |

Some handy indicators to put in the aircraft's label whilst doing speed control are:  
**.78** - Aircraft report - Mach .78  
**M78** - Controller instruction - Maintain Mach .78  
**M78G** - Controller instruction - Maintain Mach .78 or Greater  
**M78L** - Controller instruction - Maintain Mach .78 or Less  
**S260** - Aircraft report - 260kts Indicated  
**260** - Controller instruction - Maintain 260kts Indicated  
**260G** - Controller instruction - Maintain 260kts Indicated or Greater  
**260L** - Controller instruction - Maintain 260kts Indicated or Less  
**MIN** - Controller instruction - Reduce to Minimum Speed  
**MX** - Controller instruction - Increase to Maximum Speed  

!!! tip
    Prior to implementing speed control, get yourself the best possible picture of what the pilots are doing. Asking questions like;  
    *"QFA123, report planned cruise Mach number"  
    "VOZ456, report speed on descent"  
    "QJE1781, report top of descent point"*  
    Will give you maximum awareness of the traffic picture, and help plan restrictions, sequences, etc.

## Descending early
Levels can also be used to help facilitate sequencing where required. Aircraft will naturally have a slower ground speed at lower levels, so to assist with any delaying action, you can give the instruction:
*"BNZ148, for sequencing, descend now to F130"*

This method is not the best for planning purposes, and will only help to achieve 1-4 mins delay, depending on how far out from the destination. This method is more suited to adjusting the sequence if things haven't quite worked out as planned, or an aircraft that despite all efforts, just will not slow down.
## Vectoring
Vectoring aircraft is best to achieve anywhere between a 2 minute and a 6 minute delay (again, depending on how far out from the FF). Vectoring aircraft for sequencing involves pointing aircraft away from their route (somewhere between 30° and 60°) for as long as necessary to achieve the delay. Whilst vectoring, you can anchor a BRL between the aircraft and the Feeder Fix to monitor how much time needs to be lost, then turn the aircraft back on route once the required delay has been achieved.

!!! note
    The times shown at waypoints when displaying an aircraft's route are not completely accurate. They are calculated based on a combination of the aircraft's ***planned TAS, Forecast GRIB winds, and estimated climb/descent profiles***. Times shown on the BRL anchored from an aircraft to a waypoint are based on the aircraft's ***current ground speed***. As a general rule of thumb, a jet aircraft will tend to add approximately 1-2 minutes to a BRL time on descent. A propeller aircraft will not add any time on descent. Both the route time and the BRL time can provide situational awareness and more info, but use whatever is appropriate for the situation.

!!! tip
    In practice, vectoring for sequencing is done a lot simply by feel. Once magnetic variation, winds, changes in aircraft speeds, rate of turns, etc, are factored in, there's a lot of variability to worry about. It can be a bit like making pancakes, the first one's always a bit screwed up... But it'll give you a good idea of the effect of winds, changes in times, and other aforementioned factors.

## Holding
Holding is the final delaying action, useful for when a delay of 6 minutes or more is required. Published Holds exist on common useful holding fixes all around Australia, usually either at the Feeder Fix, or a waypoint before the Feeder Fix. Locations of Published Holds can be found on ERC Charts.

!!! example
    **YWE:** "BNZ135, Showing an 8 minute delay at ARBEY. Fly published hold at APPLE, when ready, descend to reach F250 by APPLE."  
    **BNZ135:** "Fly Published hold at APPLE, when ready, descend to reach F250 by APPLE, BNZ135"  
    ...  
    **YWE:** "BNZ135, Cancel hold, cleared APPLE, ARBEY, to rejoin the STAR, when ready, descend via STAR to A090, QNH 1013"  
    **BNZ135:** "Cancel hold, cleared APPLE, ARBEY, to rejoin the STAR, when ready, descend via STAR to A090, QNH 1013, BNZ135" 

Using standard `AIP GEN 3.4` phraseology *"Hold at (waypoint)"*, lends itself to pilots unfamiliar with the published hold procedures being less likely to speak up, and more likely to just do whatever they want. This is why it is preferred that instead, the phrase *"Fly published hold at (waypoint)"* is used, to give the pilot a chance to let the controller know that they're not sure what the instruction means. In this instance, and if you need to hold at a non-published point, Utilise the full `AIP GEN 3.4` hold phraseology:

!!! example
    **ELW:** "VOZ888, Showing a 7 minute delay at LIZZI. Hold at NABBA, Inbound track 224 degrees, Left hand pattern, Outbound time 2 minutes. When ready, descend to reach F250 by NABBA."  
    **VOZ888:** "Hold at NABBA, Inbound track 224 degrees, Left hand pattern, Outbound time 2 minutes. When ready, descend to reach F250 by NABBA, VOZ888"  
    ...  
    **ELW:** "VOZ888, Cancel hold, cleared NABBA, BULLA, TAREX, LIZZI, to rejoin the STAR, maintain F300"  
    **VOZ888:** "Cancel hold, cleared NABBA, BULLA, TAREX, LIZZI, to rejoin the STAR, maintain F300, VOZ888" 
