---
  title: Essendon (YMEN)
---

--8<-- "includes/abbreviations.md"

## Positions
| Name               | Callsign       | Frequency        | Login Identifier                         |
| ------------------ | -------------- | ---------------- | ---------------------------------------- |
| Essendon ADC      | Essendon Tower   | 125.100         | EN_TWR                                   |
| Essendon SMC      | Essendon Ground  | 121.900         | EN_GND                                   |
| Essendon ATIS     |                  | 119.800         | YMEN_ATIS                                |

## Airspace
EN ADC is responsible for the Class C airspace shown below, `SFC` to `A020`.

<figure markdown>
![EN ADC Airspace](img/enadc.png){ width="700" }
</figure>

## Runway Selection
Consideration of the Melbourne duty runway(s) should be made when nominating runways. The effect of Melbourne traffic on a runway selection takes priority over compliance with DAP Noise Abatement Procedures.

The 26A17D runway mode is most optimal for facilitating separation with YMML traffic.

## Departures
IFR flights shall be cleared via:  
    a) When cloud base and visibility exceeds `A020` and 5 KM, visual departure;  
    b) otherwise; EN (RADAR) SID.  

Start clearance is required for:  
    a) Flights to ML;  
    b) Flights to MB and AV planned above `A020` (i.e. via ML TCU Class C).  

## Arrivals

### IFR
ML TCU shall clear aircraft for approach via the appropriate arrival gate: 

| Runway | Arrival Gate |
| ------ | ----------|
| 26     | MONTY  |
| 35     | MONTY |
| 17     | 5NM FINAL |
| 08     | 5NM FINAL |

!!! Note
    EN ADC must not permit aircraft to depart from the RWY 26 extended centreline until passed LUY and within the vertical limits of EN airspace.

### VFR
VFR arrivals from Class G shall be cleared (at not above `A015`) via:

| Direction | VFR Approach Point | RWY 17, 26 | RWY 35 |
|----------| ------------------------ | ----------| ----------|
| North | KAO | DCT | DCT |
| North East | YYN     | DCT | DCT |
| East | DSN    | DCT | DCT |
| South East | APL    | MCG  | MCG|
| South | SNP     | MVC | FGN  |
| South West | WES   | MVC | DCT |

## VFR Operations

### Circuit Direction
| Runway | Direction |
| ------ | ----------|
| 35     | Right  |
| 26     | Left |
| 17     | Left |
| 08     | Right |

### Circuit Altitude
Circuits are to be flown at `A015`

## Separation
EN ADC is responsible for **all separation** with YMML Traffic, including arrivals to RWY34 via the MONTY-SHEED track, and all potential arrivals, departures, and missed approach paths.  
Some important points to note are that:  
- Aircraft operating on or south of the 08/26 Centreline are separated with YMML 09/27 Traffic at all times  
- Aircraft operating on or east of the 17/35 Centreline are **only** visually separated with YMML 16/34 Traffic in **Day VMC**  
- Aircraft conducting the ILS 26 Published Missed Approach are **only** visually separated with YMML 16/34 Traffic in **Day VMC**

EN ADC must assume that **any runway** at YMML may be used for arrival, departure, or a missed approach, **at any time**.  
When the cloud base is below **A020**, or the Visibility is below **5000m**, all aircraft operating within **3nm** of the 09/27 or 16/34 extended centreline must be [boundary coordinated](../../../controller-skills/coordination/#boundary) to ML ADC, as prescribed in [Coordination](#ml-adc)

## Miscellaneous
Traffic in EN ADC airspace shall squawk 0100 unless a discrete code is required.

### Melbourne City Orbits
EN ADC is responsible for facilitating aircraft requesting city orbits. They shall be conducted at an altitude of:  
`A015` by day  
`A022` by night

!!! example
    **EOG**: "Essendon Tower, EOG, approaching WMS, A015, Requesting 1 left-hand city orbit, in receipt of L"  
    **EN ADC**: "EOG, Essendon Tower, cleared 1 left-hand city orbit A015"  
    **EOG**: "Cleared 1 left-hand city orbit A015, EOG"  
    *When orbit is complete and aircraft is leaving CTA laterally:*  
    **EN ADC**: "EOG, control services terminated, frequency change approved"  
    **EOG**: "EOG"

## ATIS
YMEN ATIS identifiers only uses letters `A` through to `M`, due to nearby YMML using letters `N` through `Y` 

## Coordination
### ML TCU
#### SMC to ML TCU
When an aircraft requests start clearance, the EN SMC controller shall coordinate with ML TCU to obtain the start clearance.

#### Departures
Essendon departures that will not enter ML TCU Class C airspace are not required to be coordinated.

All aircraft departing into Class C must be coordinated to ML TCU with a "Next" Call

!!! example
    <span class="hotline">**EN ADC** -> **ML TCU**</span>: "Next, FD318"  
    <span class="hotline">**ML TCU** -> **EN ADC**</span>: "FD318, heading 330, unrestricted"  
    <span class="hotline">**EN ADC** -> **ML TCU**</span>: "Heading 330, FD318"

The Standard Assignable level from EN ADC to ML TCU is the lower of `A030` or the `RFL`, any other level must be prior coordinated.

#### Arrivals/Overfliers
ML TCU will heads-up coordinate arrivals/overfliers from Class C to EN ADC.  
IFR aircraft will be cleared for the coordinated approach (Instrument or Visual) prior to handoff to EN ADC, unless EN ADC nominates a restriction.  
VFR aircraft require a level readback.

!!! example 
    <span class="hotline">**ML TCU** -> **EN ADC**</span>: "via KAO, KHU"  
    <span class="hotline">**EN ADC** -> **ML TCU**</span>: "KHU, A015"

!!! Note
    For aircraft not tracking via an Arrival Gate (ML TCU shall clear aircraft for approach via the appropriate arrival gate:), ML TCU is required to coordinate descent of aircraft into EN ADC airspace.

When “The Coffin” is released, ML TCU is required to coordinate any use of Runway 27 prior to use.

#### Runway Change
Any Runway change must be prior coordinated to **ML TCU**

### ML ADC
EN ADC is responsible for separation with all YMML traffic, and must coordinate any aircraft operating in EN ADC airspace that cannot be visually or laterally separated with the 09/27 or 16/34 Extended Centrelines at YMML.

!!! example 
    <span class="hotline">**EN ADC** -> **ML ADC**</span>: "Boundary Ident, OXG, Published Missed Approach from the ILS 26"  
    <span class="hotline">**ML ADC** -> **EN ADC**</span>: "OXG, My restriction is QFA451 on a 10nm final RWY 34. Your separation"  
    <span class="hotline">**EN ADC** -> **ML ADC**</span>: "My separation with QFA451, OXG"