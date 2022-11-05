---
title: Coordination
---

--8<-- "includes/abbreviations.md"

Coordination requirements are often very location-specific, however this page outlines the general guidelines to coordination, which are supplemented by Local Instructions.

[MATS Chapter 6](https://www.airservicesaustralia.com/mats/docs/nos-saf-2000.pdf){target=new} goes in to much more detail about coordination principles, phraseology, and situations. It is well above the level required for VATSIM, but feel free to read up on it if you want to extend your learning.

## Types of Coordination
### Heads-up

Heads-up Coordination is the act of giving the next sector a "heads-up" about an aircraft about to enter their airspace. The format is as follows:

Controlling Sector -> Receiving Sector: "(Position), (Callsign)"  
Receiving Sector -> Controlling Sector: "(Callsign), (Level)"

!!! example
    **ELW** -> **BIK**: "via CB, VOZ1234"  
    **BIK** -> **ELW**: "VOZ1234, F350"  

If the level that will be assigned at transfer of jurisdiction is different from the current CFL, the Controlling Sector will use the phrase "Will be assigned (level)".

Once this coordination is completed, the aircraft's level and route is **locked in**. Any further changes must be recoordinated.

!!! example
    **ELW** -> **BIK**: "VOZ1234, requesting DCT RIVET"  
    **BIK** -> **ELW**: "VOZ1234, concur DCT RIVET"  

!!! tip
    In situations where Heads-Up Coordination is required, the best time to do it is when the aircraft first calls you. There's no need to wait until half a mile before when its due, if you can get it done sooner.

### Voiceless

Certain routes, areas, levels, airspace, etc, will have voiceless coordination agreements, which is where Heads-Up Coordination is not required. These routes may also have change parameters, where no changes are permitted within a certain distance of the sector boundary without prior coordination.

### Boundary

Where an aircraft will deviate laterally within 2.5nm, or vertically within 500ft of another sector's airspace, boundary coordination must be completed so they are aware of the aircraft, and can nominate any restrictions. The format is as follows:

Controlling Sector -> Boundary Sector: "For Ident, (Position), (Callsign), (Details as required)"  
Boundary Sector -> Controlling Sector: "(Callsign), (Restriction)"

!!! example
    **BIK** -> **CAE**: "For Ident, overhead CB, QFA12, do you have any restrictions on descent?"  
    **CAE** -> **BIK**: "QFA12, No restrictions on descent"  

The Boundary Sector may omit the restriction and readback the callsign only. This will be taken as the Boundary Sector having **no vertical or lateral restrictions**.

!!! example
    **INL** -> **BAS**: "For Ident, West of BLAKA, ABC"  
    **BAS** -> **INL**: "ABC"

## The C-Prompt (Coordination Prompt)
Display the "C-Prompt" when all coordination for an aircraft is complete, or voice coordination is not required for an aircraft (eg subject to voiceless coordination).

The "C-Prompt" can be displayed by middle clicking the area just above the aircraft's callsign in the label.

<figure markdown>
![C-Prompt](img/cprompt.png){ width="200" }
  <figcaption>C-Prompt</figcaption>
</figure>

Remove the "C-Prompt" once jurisdiction of the aircraft has been handed off, and the new frequency has been correctly read back.

## Rules
## General
Coordination must be done on a **point-to-point** basis. Meaning, you can only coordinate with the sector which the aircraft is coming from, or going to, no skipping! This is important to remember, for example, if you are controlling ELW, and you would like to pass an amended route to someone on the ground at YMML. Whilst that may be no issue for ELW, ML SMC and ML ADC, it might not work for ML APP. ML APP would be the sector which the aircraft is coming from, so ELW must talk to them, and it is the responsibility of ML APP to work backwards down the line on a point-to-point basis.

Ensure no coordination is ambiguous in its meaning. Not all coordination can be straight out of the phraseology books, and the reality is, not everyone controlling the airspace is going to be 100% proficient and by the books. When using "plain english", ensure there is no ambiguity, and the message is fully understood by both parties.
### ENR/TCU -> Metro Class D TWR
Voice coordinate Sequence **prior to transfer**
### ENR -> Procedural Class D TWR
Voice coordinate Sequence prior to **5 mins** from boundary
### All Class D TWR -> ENR/TCU
Voice coordinate Taxi call for CTA departures, Next call for **all** departures
### ENR -> TCU
**Voiceless** for aircraft landing at main airport (eg YMML in ML TCU), assigned a STAR, and standard assignable level.  
Voice coordinate all other aircraft by **20nm** to boundary
### TCU -> ENR
**Voiceless** for aircraft assigned lower of standard assignable level or RFL
### ENR -> Oceanic
Voice coordinate estimate and level prior to **15 mins** to boundary
### Oceanic -> ENR
Voice coordinate estimate and level prior to **15 mins** to boundary
### ENR -> ENR
**Voiceless**, no changes to route or CFL within **20nm** to boundary
### Handoffs
Receiving a handoff means you are permitted to turn an aircraft **45 degrees left or right**, and **climb/descend it to any level** without coordination. Do not handoff an aircraft to another sector if a turn of 45 degrees or a change of level would cause a conflict with any of your own aircraft. Or alternatively, you can nominate a restriction prior to handoff.

!!! example
    **YWE** -> **TBD**: "ABC, my restriction is DEF, calls you now"  
    **TBD** -> **YWE**: "ABC, restriction is DEF, calls me now"

For more information, refer to individual local instructions.



