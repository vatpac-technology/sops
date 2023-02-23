---
title: Circuit Operations
---

--8<-- "includes/abbreviations.md"

In the real world, circuit operations are generally confined to smaller
uncontrolled or Class D aerodromes. On VATSIM, pilots may choose to fly circuits
at any aerodrome, including major Class C aerodromes.

## Clearance

At a Class C aerodrome, provide an explicit clearance to operate in the circuit
area, alongside an altitude and a discrete squawk code.

!!! example
    *ABC is a VFR aircraft on the ground at Canberra that intends to conduct circuit training.*  
    **ABC:** "Canberra Ground, ABC, request clearance for circuits, with information L"  
    **CB SMC:** "ABC, Canberra Ground, cleared to operate in the circuit area not above A030, squawk 0040"  
    **ABC:** "Cleared to operate in the circuit area not above A030, squawk 0040, ABC"  
    **CB SMC:** "ABC"

At a Class D aerodrome, a clearance to take-off is a clearance to operate within
a Class D control zone, so an explicit airways clearance is not given.

!!! example
    *ABC is a VFR aircraft on the ground at Archerfield that intends to conduct circuit training.*  
    **ABC:** "Archer Ground, ABC, Cessna 172 on the Eastern Apron, information F, request taxi for circuits"  
    **AF SMC:** "ABC, Archer Ground, taxi to holding point B1, runway 28R"  
    **ABC:** "Taxi to holding point B1, runway 28R"    
    *ABC changes to **AF ADC** frequency approaching the holding point.*  
    **ABC:** "Archer Tower, ABC, ready runway 28R, for circuits"  
    **AF ADC:** "ABC, runway 28R cleared for take-off"  
    **ABC:** "Runway 28R cleared for take-off, ABC"

For aircraft that are already airborne, provide circuit joining instructions on first contact.

!!! example
    *DEF is a VFR aircraft inbound to Canberra that intends to conduct circuit training.*  
    **DEF:** "Canberra Tower, DEF, overhead Hoskinstown, A040, information L, for the circuit"  
    **CB ADC:** "DEF, Canberra Tower, join downwind runway 12, not above A030, squawk 2311"  
    **DEF:** "Join downwind runway 12, not above A030, squawk 2311, DEF"  
    **CB ADC:** "DEF"

## Takeoff

The standard circuit is performed with left-hand turns (i.e. a "left circuit").
Right circuits, where all turns are made to the right, are sometimes required
for traffic, terrain, or noise abatement considerations. For example, where
parallel runways are in use, the right runway generally uses a right circuit,
and the left runway a left circuit, in order to separate traffic.

Circuit directions are usually provided in ERSA, but if any doubt exists or a
non-standard circuit is in use, provide the circuit direction with the take-off
clearance.

!!! example
    **AF ADC:** "ABC, runway 28R cleared for take-off, make left circuit"  
    **ABC:** "Runway 28R cleared for take-off, make left circuit, ABC"

## Landing

After becoming airborne and making the turn to crosswind and then downwind, the
pilot will report their position with intentions. There are a number of
different requests a pilot may make a this point:

1. a **touch and go**, where the aircraft makes a landing and then immediately takes off again, continuing within the circuit;
2. a **stop and go**, where the aircraft makes a landing, comes to a complete stop on the runway and then takes off again, continuing within the circuit;
3. a **full-stop landing**, where the aircraft makes a normal landing and exits the runway; or
4. the **option**, which is the pilot asking for the option to make either of the above three manouvers at their own discretion, without any further clearance.

!!! example
    **ABC:** "ABC, downwind, request touch and go"  
    **AF ADC:** "ABC, cleared touch and go"  
    **ABC:** "Cleared touch and go, ABC"


Depending on the traffic situation, you may approve the pilots request, or else
require that they make a full-stop landing.

!!! example
    **ABC:** "ABC, downwind, request the option"  
    **AF ADC:** "ABC, make full stop due to traffic, cleared to land"  
    **ABC:** "Cleared to land, ABC"

## Sequencing

In Class C airspace, separation is required between IFR and VFR aircraft. In
Class D airspace, separation is only required between IFR aircraft.
Nevertheless, controllers should still make all efforts to ensure an expiditious
flow of traffic between aircraft in the circuit as well as aircraft arriving at
the aerodrome from elsewhere.

**ADC** are not permitted to vector aircraft, but there are a number
of other tools available to help segregate aircraft within the circuit.

!!! warning
    The use of these tools in no way diminishes the responsibility of VFR
    aircraft to see and avoid, nor does it relieve the controller of the
    responsibility to pass traffic information where applicable.

### Approach Instructions

An **ADC** may issue instructions for a pilot to make a longer or shorter
approach, or to explicitly extend their downwind leg, so as to either pass in
front of or behind another aircraft.

!!! example
    *ABC is downwind on runway 16L at Sydney while QFA1254 is established on a 3 mile final for the same runway.*
    **ABC:** "ABC, downwind, request touch and go"  
    **SY ADC:** "ABC, traffic is a Boeing 737 on a 3 mile final, extend downwind"  
    **ABC:** "Extend downwind, traffic in sight, ABC"  
    **SY ADC:** "QFA1254, traffic is a Citation on a left downwind, A015"  
    **QFA1254:** "QFA1254, looking"  
    *Some time later, after QFA1254 is no longer a factor and wake turbulence separation has been assured.*  
    **SY ADC:** "ABC, continue approach, report final"  
    **ABC:** "Wilco, ABC"  
    *At 4nm from touchdown.*  
    **ABC:** "ABC, final"  
    **SY ADC:** "ABC, cleared touch and go"  
    **ABC:** "Cleared touch and go, ABC"

### Delaying Aircraft

An **ADC** may issue an instruction for a pilot to make a complete 360 degree
orbit, either left or right, to delay the aircraft in place.

!!! example
    *DEF, a Cessna 172, is on a left downwind on runway 30 at Canberra, while UEM, a Baron, is joining left base.*
    **DEF:** "DEF, downwind, full-stop"  
    **CB ADC:** "DEF, traffic is a Baron joining base to land, orbit right, report orbit complete"  
    **DEF:** "Orbit right, wilco, DEF"  
    **CB ADC:** "UEM, traffic is a Cessna 172 orbiting downwind to give way to you, A030, cleared to land"  
    **UEM:** "Traffic in sight, cleared to land, UEM"  
    **DEF:** "DEF, orbit complete"  
    **CB ADC:** "DEF"  
    *Some time later, after UEM has vacated the runway.*  
    **CB ADC:** "DEF, cleared to land"  
    **DEF:** "Cleared to land, DEF"

### Change of Runway

An **ADC** may change the runway for an aircraft in the circuit, so as to
separate circuit traffic from non-circuit traffic, or to segregate aircraft with
different performances for better traffic flow.

!!! note
    Do not offer a change of runway to an aircraft below `A005` on final.  
    You may approve a pilot request for a change of runway for an aircraft
    established on final.

!!! example
    *ABC is on a right downwind on runway 16R at Sydney. QLK1834 is on a 7 mile final for the same runway.*  
    **ABC:** "ABC, downwind, request touch and go"  
    **SY ADC:** "ABC, join right base change of runway 16L"  
    **ABC:** "Join right base runway 16L, ABC"  
    **ABC:** "ABC, base runway 16L"  
    **SY ADC:** "ABC, runway 16L cleared touch and go, make left circuit"
