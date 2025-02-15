---
  title: 4. Darwin (YPDN)
---

--8<-- "includes/abbreviations.md"

## Runway Modes
Single runway operations on either **runway 11 or 29** will be in use for all aircraft. Runway 18/36 will not be available for arrivals and departures, due to its use as a taxiway for some aircraft.

## Workload Management
Due to the extreme workload expected for all positions, the use of the OzStrips plugin for managing aerodrome positions is **mandatory**. Controllers should familiarise themselves with the plugin and the VATPAC [recommended workflow](../../../../client/towerstrips/#recommended-workflow).

## Airways Clearance Delivery (ACD)
### Flight Plan Compliance
Ensure **all flight plans** are checked for compliance with the approved WF Route:

`DCT DN Y25 RUPEG DCT IGOPO B598 ESKIM DCT GUMBU DCT PY DCT`

**OzStrips** will flag any *non-compliant* WF route.

If an aircraft has filed an *incorrect* route and you need to give an amended clearance, this amendment must be specified by **individual private message**, prior to the PDC.

!!! phraseology
    **DN ACD:** *"AMENDED ROUTE CLEARANCE. CLEARED TO AYPY VIA RUPEG DCT IGOPO B598 ESKIM DCT GUMBU DCT PY DCT. READBACK AMENDED ROUTE IN FULL DURING PDC READBACK. STANDBY FOR PDC."*

### WorldFlight Teams
[WorldFlight Teams](../../../../#official-team-callsigns) shall have `STS/STATE` added to their remarks, and `WF TEAM` added to their Global Ops Field, to ensure they receive priority.

!!! tip
    The [vatSys Events Plugin](https://github.com/badvectors/EventsPlugin){target=new} will also highlight WF Teams, as shown below. Click on the link to install it, or alternatively, use the [Plugin Manager](https://github.com/badvectors/PluginManager){target=new}

    <figure markdown>
    ![WF Team Highlight with Events Plugin](../../img/wfteam.png){ width="400" }
    <figcaption>WF Team Highlight with Events Plugin</figcaption>
    </figure>

### Strip Setup
By default, vatSys strips will be set to show in *Alphabetical* Order.  
This must be changed to be ordered by **Time**, as shown below.

<figure markdown>
![Strips Menu](../../img/strip1.png){ width="500" }
    <figcaption>Strips Menu</figcaption>
</figure>

<figure markdown>
![Change to Time](../../img/strip2.png){ width="500" }
    <figcaption>Change to Time</figcaption>
</figure>

### SID Selection
Runway 11 Departures shall be issued the **RUPEG2** SID.  
Runway 29 Departures shall be issued the **DN7** RADAR SID.  

### Departure Frequency
Regardless of Runway in use, Departure frequency shall be DAE (**125.2**).

### PDCs
PDCs will be in use by default, to avoid frequency congestion. ACD shall send a PDC to each aircraft as they connect, prioritising those who connected first. Upon successful readback of the PDC, ACD shall direct the pilot to contact SMC when ready for pushback or taxi.

!!! tip
    OzStrips displays strips in the Preactive bay ordered by connection time. Aircraft who connected first are shown down the bottom of the bay.

Work through the OzStrips Preactive bay from *bottom to top* when sending PDCs.

## Surface Movement Control (SMC)
### Pushback Delays
SMC will be responsible for delaying aircraft's pushback requests, in order to avoid overloading the taxiways.

If there are more than **5** aircraft in the queue at any Holding Point, do not approve any more pushback requests. Instead, use the queue function to keep track of who is awaiting push.

#### OzStrips
All aerodrome controllers must be familiar with the VATPAC [recommended workflow](../../../../client/towerstrips/#recommended-workflow) for OzStrips.

Ensure the Queue function is used to actively to keep track of the order of requests.

A Custom `PDC SENT` bar should be created in the Preactive window, to keep track of who has and hasn't received a PDC.

### A388 Parking
There is only 1 stand suitable for A388 parking (refer to [YPDN Apron Chart](https://www.airservicesaustralia.com/aip/current/dap/PDNAP01-180_05SEP2024.pdf){target=new}). If this is occupied, A388 aircraft must be instructed to park off-apron on grass.

### Taxi Routes
#### Grass Taxiing
Due to the taxiway layout at YPDN, some aircraft may need to taxi via temporary grass taxiways, as shown below:

<figure markdown>
![YPDN Grass Taxi Routes](../../img/ypdngrass.png){ width="700" }
  <figcaption>YPDN Grass Taxi Routes</figcaption>
</figure>

#### Runway 11
Aircraft from the RPT apron should taxi outbound via **B2** and **Z** to holding point **C4**. Aircraft from the southwestern apron should taxi outbound via **C2** to holding point **A1**. **C3** *should not* be used as a holding point.

Aircraft vacating runway 11 to the left (north) should be instructed to taxi via the **northern grass** and **E2** to the bay. Aircraft vacating to the right (south) should be instructed to taxi via **A**, **runway 18**, and **C1** to the southwestern apron. Alternatively, they may park at the *BRA* or *FRA* aprons.

#### Runway 29
Aircraft from the RPT apron should taxi outbound via **E2** and the **northern grass**. Aircraft from the southwestern apron should taxi outbound via **C1**, **runway 36**, and **A** to holding point **A6**.

Aircraft vacating runway 29 to the right (north) should be instructed to taxi via **Z** (if required) and **B2** to the bay. Aircraft vacating to the left (south) will be instructed by ADC to vacate at **C3** or **A1**. They should be instructed to taxi via **A1** (if required) and **C2** to the southwestern apron.

## Tower Control (ADC)
### Departure Spacing
Ensure that a minimum of **90 second** spacing is applied between subsequent departures from the same runway.

### DN7 Assigned Heading
Departures from Runway 29 will be assigned the **DN7** SID with an assigned heading of **H130**.

### Wake Turbulence Separation
Due to the tight sequence, there are times that [Wake Turbulence Separation](../../../../../../separation-standards/waketurb/#runways) cannot practically be applied.

When a following aircraft is of a *lighter* [Wake Turbulence Category](../../../../../../separation-standards/waketurb/#categories) than the preceding aircraft, a traffic statement and wake turbulence **caution** shall be issued.

!!! phraseology
    **DN ADC:** "BNZ1193, A380 has just departed ahead. Caution Wake Turbulence. Runway 29, Cleared for Takeoff"  
    **BNZ1193:** "Cleared for Takeoff Runway 29, BNZ1193"

### Runway Vacating Instructions
ADC should assess traffic congestion on both the north and south sides of the aerodrome, and direct pilots to vacate towards the least congested side.

#### Runway 11
Aircraft intended for the northern aprons should be instructed to vacate at either **E2** or via the **northern grass** if they miss it. Aircraft intended for the southwestern apron should be instructed to vacate on any taxiway to the right.

!!! phraseology
    **DN ADC**: "QFA25, vacate to the right, runway 11, cleared to land"

#### Runway 29
Aircraft intended for the northern aprons should be instructed to vacate at either **B2** or **runway 36**. This way, any pilots who miss the crossing runway can still vacate via **C4**. Aircraft intended for the southwestern apron should be instructed to vacate at either **C3** or **A1**.

!!! warning "Important"
    It is **vital** that aircraft do not vacate left (south) prior to runway 36, as this will cause significant conflict with the outbound taxi route and likely to lead to the aircraft being required to disconnect. If an aircraft slows down rapidly, consider instructing them to vacate to the right via **B2** or reminding them to keep their speed up and roll through to vacate at **C3**.

## ATIS
The ATIS OPR INFO shall include:  
`EXP CLR VIA PDC`

## Coordination
### DN TCU
#### Auto Release
Available for aircraft assigned `F180`, and:

| Runway | SID | Assigned Heading |
| ---------- | --- | --- |
| 11  | RUPEG2 | - |
| 29  | DN7 | H130 |

#### Departures Controller
All departures shall be handed off to DAE.  
DAW has *No Restrictions or Requirements* on Runway 29 Departures.