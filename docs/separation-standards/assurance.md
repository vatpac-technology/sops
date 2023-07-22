---
title: Assurance
---

--8<-- "includes/abbreviations.md"

## Separation Assurance
Colloquially, separation assurance could be described as: if you turn away from the screen for 5 minutes, no standard could possibly be infringed. Officially, `MATS 10.1.1.1.1` defines Separation assurance as:  

*(Assuring) separation through the process of assessing traffic, identifying conflicts, planning to ensure separation, executing the plan and monitoring the situation to ensure the standard is not infringed*.  

Here are some techniques to help aid with each of those elements.

### Assessing traffic and Identifying conflicts
There are 3 types of conflicts;
#### Vertical
Aircraft assigned the same level, or assigned climb/descend through the other aircraft's level(s).  Simple
#### Longitudinal
Tracks intersecting at less than 45° (same track), or between 135° and 180° (reciprocal track).  
Reciprocal tracks will always be a longitudinal conflict at some point in time.  
Same tracks are only in conflict if there is a **faster following** scenario, eg, ABC doing 120kts, 30nm ahead of QFA94 doing 360kts on the same route.
#### Lateral
Tracks intersecting at more than 45°, but less than 135°.

The best way to determine if aircraft will be laterally in conflict, is with the use of the Closest Approach tool. A good rule of thumb is, if the Closest Approach tool indicates the aircraft will come with **20nm laterally** of each other, they have the potential to be in lateral conflict.

!!! note
    The Closest Approach tool uses calculations based on both aircraft's **routes, planned TAS,** and **estimated climb/descent profiles**. This is why in practice, it won't always get the distance right, which is why we add so much fat to a 5nm lateral standard in the usage of the tool for assessment purposes. The further out from the crossing point the aircraft are, the more inaccurate the tool is.

### Planning to ensure separation
This is where you decide the method for separation assurance. Are you going to implement a restriction to reach a certain altitude by a certain point? Are you going to place a BRL between the aircraft to monitor closing speed? Are you going to anchor a BRL at the point where lateral conflict is infringed, to monitor the aircraft vertically clear? Are you going to give one aircraft a vector to keep clear? There are several different ways to approach resolving these conflicts, so choose the one that best suits the situation, and that you are comfortable with.

### Execute the plan and Monitor the situation

Executing the plan may involve passing instructions to pilots, coordinating with other controllers, and using system tools (eg BRL, Closest Approach), as neccessary. Monitoring the situation is all about using the system tools to your advantage, some examples include:

1) After passing a speed restriction to an aircraft to slow down, watching to make sure the GS has reduced.  
2) Anchoring a BRL between 2 aircraft to see if the distance between is opening or closing.  
3) Using a BRL and velocity vectors to measure distances between conflicts in 1 min, 2 mins, 3 mins, so on.  

<figure markdown>
![Monitoring Tools](img/monitorexample.png){ width="700" }
  <figcaption>Monitoring Tools</figcaption>
</figure>

The BRL Tool has many uses, and is critical to the act of separation assurance.
## Level Management
When issuing a climb or descent instruction, ask yourself: *"What altitude/level can be assigned which results in the smallest number of transmissions?"*

A common habit is to see controllers issuing the instruction *"When ready, descend to F250"*, despite there being no reason to do so. If there is no traffic restrictions and CTA LL permits, descent the aircraft to the CTA LL.

!!! Example
    VOZ888 is tracking from Sydney to Melbourne via the Q29 airway to LIZZI for the LIZZI8A arrival runway 34.

    "VOZ888, when ready, descend via the STAR to A090, QNH 1009."

!!! note
    An appropriate time to assign F250 for descent would be, for example, an aircraft tracking on the Y59 airway to YSSY, when CB_APP is online (since they own the CB TMA up to F245). In this example, you would not assign lower than F250 until the aircraft is 2.5nm clear of the CB TMA.  
    Do not assign levels through another sector's airspace without coordination, even if it would take a 20,000ft/min descent rate to clip the airspace! Either wait until the aircraft is 2.5nm clear, or coordinate with the sector.

Further transmissions can be saved in the busy TMA, with the use of "descend via STAR" phraseology when CTA protection is in place, **only** where Height Requirements exist on the STAR assuring aircraft remain inside CTA.

!!! Example
    RXA4652 is tracking via ODALE for the ODALE7 STAR to runway 34R. CTA LL is 8000FT, but the STAR has built-in CTA protection (8000FT ABOVE at KABLO)

    "RXA4652, Sydney Approach, runway 34R, descend via the STAR to 6000FT"

### Level Check
Unless a level has been "locked in" for an aircraft entering your airspace, either from being inside a change parameter, receiving heads-up coordination, or being a standard assignable level, their CFL cannot be used for separation purposes. Certain aircraft may require additional time to plan restrictions, identify conflicts, etc (For example, as **ELW**, an aircraft cutting across the YMML departure/arrival path at F230), and this is where a **level check** may be useful. If you want to "lock in" a level for an aircraft coming from an adjacent sector, use the following phraseology:

!!! example
    **ELW** -> **YWE**: "Level Check, VOZ456, F360"  
    **YWE** -> **ELW**: "VOZ456, F360"  

Any changes to VOZ456's level would now need to be coordinated by YWE, so no surprises!

Level checks are also useful for when you have identified a conflict, and you need to assign a different level to the one currently assigned by the controlling sector in order to assure separation.

!!! example
    **BIK** -> **SDS**: "JST123, Assigned F200 due crossing traffic"  
    **SDS** -> **BIK**: "JST123, F200"  

When using the level check technique, bear in mind the sector that you're coordinating with may have no idea what a Level Check is. Use plain english as required to get the message across (and be nice 😊).