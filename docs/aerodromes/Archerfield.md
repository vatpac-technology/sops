---
  title: Archerfield (YBAF)
---

--8<-- "includes/abbreviations.md"

## Positions
| Name               | Callsign       | Frequency        | Login Identifier                         |
| ------------------ | -------------- | ---------------- | ---------------------------------------- |
| Archerfield ADC  | Archer Tower  | 118.100        | AF_TWR                        |
| Archerfield SMC   | Archer Ground  | 129.300         | AF_GND                       |
| Archerfield ATIS        |                | 120.900          | YBAF_ATIS                                |

<figure markdown>
![YSBK Maneuvering Area](img/YBAF_ManMapB.PNG){ width="500" }
  <figcaption>Maneuvering Area</figcaption>
</figure>

## Airspace
AF ADC is responsible for the Class D airspace in the AF CTR `SFC` to `A015`.

<figure markdown>
![AF ADC Airspace](img/YBAF_Vatsys.PNG){ width="700" }
  <figcaption>AF ADC Airspace</figcaption>
</figure>

Refer to [Class D Tower Skills](../../controller-skills/classdtwr) for more information.

## VFR Arrival Procedures
VFR aircraft should track via a VFR inbound point at `A015` and be instructed as below:

| VFR Approach Point | RWYs 04  | RWYs 22 | RWYs 10  | RWYs 28 | 
| ----------------   | --------- | ------------- | --------- | ---------- |
| TVT    |  *"Join Base RWY 04L, report CBRG"* | *"Join Base RWY 22R, report CBRG"* | *"Join Final RWY 10L, report CBRG"* | *"Join Downwind RWY 28R, maintain A015, report CBRG"* |
| GON    |  *"Join Final RWY 04L"*                             | *"Join Downwind RWY 22R, maintain A015"*                          | *"Join Final RWY 10R"* | *"Join Downwind RWY 28L, maintain A015"*        |
| PKR   |  *"Join Base RWY 04R, report Logan Bridge"*     | *"Join Base RWY 22L, report Logan Bridge"*     | *"Join Base RWY 10R, report Logan Bridge"*  | *"Join Base 28L, report Logan Bridge"*         |
| TAR       |  *"Join Base RWY 04R"*                              | *"Join Base RWY 22L"*                              | *"Join Downwind RWY 10R, maintain A015"*       | *"Join Final RWY 28L"*        |

!!! note
    Aircraft joining downwind are instructed to maintain `A015` for separation with aircraft departing the zone at `A010`.  Once inbound aircraft are clear of the departure track, they should be *"cleared visual approach"*.

## VFR Departure Procedures

| Planned Departure Tracks | "Intentions"   | Tracking Requirement | 
| ---------------      | ---------      | ----------           | 
| BTN 310 & 019 DEG    | Northern Departure | Track via WTBG | 
| BTN 020 & 099 DEG    | Eastern Departure  | Track via Gateway Motorway and Pacific Motorway Intersection   *(Not available when Rwy 22 active EXC if departing into Class C)* | 
| BTN 100 & 204 DEG    | Southern Departure | Track 135 DEG from Archerfield |
| BTN 205 & 309 DEG    | Western Departure  | DEP AF CTR on a track between 220 & 309. Acft must nominate outbound DEP track with TAXI call |
| Other                |                    | As approved by ATC

VFR departures will depart the control zone at `A010`.

Aircraft should advise planned Departure Procedure to **AF SMC** with TAXI call and **AF ADC** with READY call.

!!! example
    **VPF:** "Archer Ground, Cherokee VPF is on the Main Apron, solo, Western Departure, received information Alpha, request taxi"

    **VPF:** "Archer Tower, Cherokee VPF is B8, runway 10 Left for Western Departure, ready"

## Circuits
The circuit direction changes depending on time of day and runway being used.

| Runway | Day  | Night |
| ----------------| --------- | ---------- |
| 04R             | Right | -  |
| 04L             | Left  | -  |
| 22R             | Right | -  |
| 22L             | Left  | -  |
| 10R             | Right | -  |
| 10L             | Left  | Left  |
| 28R             | Right | Right |
| 28L             | Left  | -  |

Circuits are to be flown at `A010`.

## ATIS
### Runway Nomination

The ATIS must indicate the current runway config and nominate what each runway is being used for.  This should be reflected on the ATIS as below:

| Runway | RWY Field  |
| ----------------| --------- |
| Single RWY      | `ALL OPERATIONS RWY (Number)` |
| RWY 10/28       | `RWY 10L/28R FOR ARRIVALS AND DEPARTURES NORTH; RWY 10R/28L FOR ARRIVALS AND DEPARTURES SOUTH` |
| RWY 04          | `RWY 04L FOR ARRIVALS AND DEPARTURES NORTH AND WEST; RWY 04R FOR ARRIVALS AND DEPARTURES SOUTH AND EAST` |
| RWY 22          | `RWY 22. EASTERN DEPARTURES NOT AVAILABLE. RWY 22R FOR ARRIVALS AND DEPARTURES NORTH AND WEST; RWY 22L FOR ARRIVALS SOUTH AND EAST AND DEPARTURES SOUTH` |

### Approach Expectation
The APCH field should include `EXP INST APCH` when:   
  - the ceiling is at or below `A029`; or  
  - visibility is less than 5000m  

## Coordination

### Departures
When aircraft planned via a CTA departure are ready for takeoff and expected to depart imminently, **AF ADC** shall seek release of the aircraft through a 'Next' call.

!!! example
    <span class="hotline">**AF ADC** -> **BN TCU**</span>: "Next, XMM, Runway 10L"  
    <span class="hotline">**BN TCU** -> **AF ADC**</span>: "XMM, Unrestricted"  
    <span class="hotline">**AF ADC** -> **BN TCU**</span>: "XMM"

The Standard Assignable level from AF ADC to BN TCU is the lower of `A040` or the `RFL`, any other level must be prior coordinated.

### Arrivals/Overfliers
BN TCU will heads-up coordinate arrivals/overfliers from Class C to AF ADC.  
IFR aircraft will be cleared for the coordinated approach (Instrument or Visual) prior to handoff to AF ADC, unless AF ADC nominates a restriction.  
VFR aircraft require a level readback.


!!! example
    <span class="hotline">**BN TCU** -> **AF ADC**</span>: "via TVT for the visual approach, UJE"  
    <span class="hotline">**AF ADC** -> **BN TCU**</span>: "UJE, visual approach"


!!! tip
    Remember that IFR aircraft are only separated from other IFR or SVFR aircraft in class D. You should *generally* be able to issue a clearance for an approach and use other separation methods (visual separation, holding a departure on the ground) if separation is required with these aircraft.