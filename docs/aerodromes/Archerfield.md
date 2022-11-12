---
  title: Archerfield (YBAF)
---

--8<-- "includes/abbreviations.md"

## Positions

| Name               | Callsign       | Frequency        | Login Identifier                         |
| ------------------ | -------------- | ---------------- | ---------------------------------------- |
| **Archerfield ADC**  | **Archer Tower**  | **118.100**          | **AF_TWR**                        |
| **Archerfield SMC**   | **Archer Ground**   | **129.300**          | **AF_GND**                       |
| Archerfield ATIS        |                | 120.900          | YBAF_ATIS                                |

 
In the absence of an SMC controller, ADC shall assume the SMC responsibilities.
<figure markdown>
![YSBK Maneuvering Area](img/YBAF_ManMapB.PNG){ width="500" }
  <figcaption>Maneuvering Area</figcaption>
</figure>

## Airspace
Tower airspace is defined as between SFC to 1500 FT.

<figure markdown>
![Archerfield Tower Airspace](img/YBAF_Vatsys.PNG){ width="700" }
  <figcaption>Archerfield Tower Airspace</figcaption>
</figure>

Refer to [Class D Tower Skills](../../controller-skills/classdtwr/) for more information.

## VFR Arrival Procedures
VFR aircraft should track via a VFR inbound point at `A015` and be instructed as below:

| VFR Approach Point | RWYs 04  | RWYs 22 | RWYs 10  | RWYs 28 | 
| ----------------   | --------- | ------------- | --------- | ---------- |
| TV Towers <br> (TVT)    |  *"Join Base RWY 04L, report Centenary Bridge"* | *"Join Base RWY 22R, report Centenary Bridge"* | *"Join Final RWY 10L, report Centenary Bridge"* | *"Join Downwind RWY 28R, maintain A015, report Centenary Bridge"* |
| Goodna   <br> (GON)    |  *"Join Final RWY 04L"*                             | *"Join Downwind RWY 22R, maintain A015"*                          | *"Join Final RWY 10R"* | *"Join Downwind RWY 28L, maintain A015"*        |
| Park Ridge <br> (PKR)   |  *"Join Base RWY 04R, report Logan Bridge"*     | *"Join Base RWY 22L, report Logan Bridge"*     | *"Join Base RWY 10R, report Logan Bridge"*  | *"Join Base 28L, report Logan Bridge"*         |
| Target <br> (TAR)       |  *"Join Base RWY 04R"*                              | *"Join Base RWY 22L"*                              | *"Join Downwind RWY 10R, maintain A015"*       | *"Join Final RWY 28L"*        |

!!! note
    Aircraft joining downwind are instructed to maintain `A015` for separation with aircraft departing the zone at `A010`.  Once inbound aircraft are clear of the departure track, they should be *"cleared visual approach"*.

## VFR Departure Procedures

| Planned Departure Tracks | "Intentions"   | Tracking Requirement | 
| ---------------      | ---------      | ----------           | 
| BTN 310 & 019 DEG    | Northern Departure | Track via Walter Taylor (Indooroopilly) Bridge | 
| BTN 020 & 099 DEG    | Eastern Departure  | Track via Gateway Motorway and Pacific Motorway Intersection   *(Not available when Rwy 22 active EXC if departing into Class C)* | 
| BTN 100 & 204 DEG    | Southern Departure | Track 135 DEG from Archerfield |
| BTN 205 & 309 DEG    | Western Departure  | DEP AF CTR on a track between 220 & 309. Acft must nominate outbound DEP track with TAXI call |
| Other                |                    | As approved by ATC

Departure Altitude is `A010`.

Aircraft should advise planned Departure Procedure to **AF SMC** with TAXI call and **AF ADC** with READY call.

!!! example
    "Archer Ground, Cherokee VPF is on the Main Apron, solo, Western Departure, received information Alpha, request taxi"

    "Archer Tower, Cherokee VPF is B8, runway 10 Left for Western Departure, ready"

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
  - the ceiling is at or below A029; or  
  - visibility is less than 5000m  

## Coordination
### AF SMC / BN TCU
#### Taxi Call
For aircraft planned via a CTA departure into Brisbane's class C airspace, **AF SMC** will coordinate a clearance for the aircraft with the relevant Brisbane TCU position.  
Whilst the aircraft is taxiing, **AF SMC** will perform TAXI coordination with Brisbane TCU, who will issue an airways clearance for Archerfield Tower to relay to the aircraft.  Aircraft planned above `A040` will be cleared initially to `A040`.
  
!!! example
    **AF SMC** -> **BN TCU**: "Taxi's, XMM, Bankstown, 10L”  
    **BN TCU** -> **AF SMC**: “XMM, cleared to Bankstown via HUUGO flight planned route, Archerfield 3 Departure, climb via SID A040, squawk 1427”  
    **AF SMC** -> **BN TCU**: “Cleared to Bankstown via HUUGO flight planned route, Archerfield 3 Departure, climb via SID A040, squawk 1427, XMM” 

#### Next Call
When aircraft planned via a CTA departure are ready for takeoff and expected to depart imminently, **AF ADC** shall seek release of the aircraft through a 'Next' call.

!!! example
    **AF ADC** -> **BN TCU**: "Next, XMM, 10L"  
    **BN TCU** -> **AF ADC**: "XMM, unrestricted"

### BN TCU / AF TWR
#### Arrival Coordination

BN TCU will coordinate with AF ADC for incoming IFR arrivals on either Visual Tracking or RNP approaches.
If tracking visually, BN TCU must coordinate the level assignment with the estimate for aircraft arriving directly from Class C.
Archerfield Tower will not alter an aircrafts tracking until the aircraft is within 3NM of Archerfield.

#### Visual Tracking

!!! example
    **BN TCU** -> **AF ADC**: "Estimate, UJE via TVT time 02."  
    **AF ADC** -> **BN TCU**: "UJE"

#### IAP Tracking
Reserved.

### Standard Assignable Departure Levels
All IFR Aircraft: `A040`