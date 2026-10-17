---
  title: 4. YBAS to YSSY
---

--8<-- "includes/abbreviations.md"

## Temporary Positions
For the duration of the event, YBAS will be reclassified as a Class C Radar Tower.

All existing Class D airspace is reclassified as Class C and two temporary surveillance TCU units are responsible for the airspace within 36 DME (39 DME to the southeast) from `SFC` to `F185`. 

### Airspace Division
=== "Runway 12"
    The TMA is split perpendicular to the extended runway centreline. **AS APP** is responsible for the airspace to the west, **AS DEP** is responsible for the airspace to the east.

=== "Runway 30"
    The TMA is split along the extended runway centreline. **AS APP** is responsible for the airspace to the south, **AS DEP** is responsible for the airspace to the north.

    !!! note
        Aircraft will be transferred from **AS DEP** directly to ASP, regardless of their position in the TMA. 

## Sector Responsibilities
### Alice Springs (ASP)
ASP is responsible for managing all departures from YBAS.

The total sector length is approximately 1,100nm. Aircraft may be allowed to overtake each other, as the stream will be split further downline. Ensure adequate vertical separation exists between any aircraft operating in close proximity.

INL will be responsible for the INL subsector **only**.

### Woomera (WRA)
The total sector length is approximately 1,100nm. Aircraft may be allowed to overtake each other, as the stream will be split further downline. Ensure adequate vertical separation exists between any aircraft operating in close proximity.

### Bourke (BKE)
BKE will be responsible for starting to form the two sequences in to YSSY by splitting the stream between the northern and western arrival corridors.

SFL will provide runway nominations for aircraft in BKE airspace through the [MAESTRO](../../../client/maestro.md) plugin. BKE shall monitor MAESTRO and provide reroutes for all aircraft assigned runway 16L/34R. These aircraft shall be recleared `IGDAM BOREE TESAT`.

!!! tip
    Aircraft operating on old AIRACs who do not have `IGDAM` shall be rerouted via `CORKY BOREE TESAT` (CORKY was renameed IGDAM in a previous AIRAC update).

Once the amended route has been entered in an aircraft's FDR, BKE must **recompute** the aircrraft in MAESTRO, to ensure their feeder fix is updated.

!!! warning "Important"
    In the unlikely event that single runway operations are conducted at YSSY, all arrivals to YSSY shall be processed via RIVET and the stream shall not be split. Diversions to YSWS may be available and should be processed via `UKDUL UNTAV`.

[Official WorldFlight teams](#official-worldflight-teams) who plan on carrying out the Scenic Arrival should plan via `TW WLM LRF`. Any participating team aircraft who have not filed this route shall be rerouted by BKE.

BKE should endeavour to provide early handoffs of aircraft to ARL, to facilitate STAR clearance and sequencing actions. Aim to handoff no later than 50nm from the boundary (VHF radio range permitting).

### Gundagai (GUN)
GUN will be responsible for issuing STAR clearances in to YSSY and finalising the sequence using *speed control* and *vectors*.

During PROPS, all aircraft via RIVET & AKMIR shall be assigned runway 16R/34L (unless otherwise dictated by SFL).

!!! tip
    If additional controllers are available, GUN's workload may be reduced by having a second controller open GTH or BIK.

If delays cause aircraft to divert to YSWS, they should be rerouted to `UKDUL UNTAV`.

#### Sequencing
Minimum distance between arrivals at handoff to SAN/SAS is **10nm** (with no significant closing speed). It is important to try not to exceed **15nm**, due to the large number of arrivals.

!!! tip
    Track shortening direct to ENLAD may help to close any gaps ahead of aircraft.

##### MAESTRO
If a Flow controller is online, the [MAESTRO](../../../client/maestro.md) plugin should be used to determine the landing sequence. Enroute positions must ensure they comply with any sequencing instructions set out by Flow and communicated through the plugin.

!!! note
    The MAESTRO plugin has been included in the Australia dataset by default for the event.

### Armidale (ARL)
ARL will be responsible for issuing STAR clearances in to YSSY and finalising the sequence using *speed control* and *vectors*.

During PROPS, all aircraft via BOREE & YAKKA shall be assigned runway 16L/34R (unless otherwise dictated by SFL).

!!! tip
    If additional controllers are available, ARL's workload may be reduced by having a second controller open RYS (extending LIG) or CNK.

If delays cause aircraft to divert to YSWS, they should be rerouted to `UKDUL UNTAV`.

#### Sequencing
Minimum distance between arrivals at handoff to SAN/SAS is **10nm** (with no significant closing speed). It is important to try not to exceed **15nm**, due to the large number of arrivals.

!!! tip
    Track shortening direct to BOREE may help to close any gaps ahead of aircraft.

##### MAESTRO
If a Flow controller is online, the [MAESTRO](../../../client/maestro.md) plugin should be used to determine the landing sequence. Enroute positions must ensure they comply with any sequencing instructions set out by Flow and communicated through the plugin.

!!! note
    The MAESTRO plugin has been included in the Australia dataset by default for the event.

## Official WorldFlight Teams
Most official team aircraft will depart from YBAS and track via `TW WLM LRF` to facilitate their scenic arrival into YSSY. These aircraft should not be issued a STAR clearance. These aircraft shall be transferred to SAN assigned `A090`.

WorldFlight Teams will be highlighted by default and should receive priority at all stages of flight.

<figure markdown>
![WF Team Highlight](../img/wfteam.png){ width="400" }
<figcaption>WF Team Highlight</figcaption>
</figure>

## Coordination
### AS TCU to ASP
Event aircraft departing YBAS shall be handed directly from AS TCU to **ASP**.

Voiceless for all aircraft:

- Assigned the lower of `F180` or the `RFL`; and  
- Tracking via **KALUG**

All other aircraft going to ASP CTA will be **Heads-up** Coordinated.

### BKE to ARL
Changes to Route and CFL are **permitted** within **50nm** of the boundary, without coordination, for sequencing purposes.  
Aircraft must be tracking via `IGDAM BOREE` (for YSSY) or `UKDUL UNTAV` (for YSWS).

#### Between ARL/GUN and SFL
SFL will construct the sequence via [MAESTRO](../../../client/maestro.md).

GUN must **voice coordinate** any requirements for an alternate runway to SFL.

SFL will **voice coordinate** to GUN any aircraft that must be rerouted via **IGDAM BOREE** for **16L/34R**.

!!! phraseology
    <span class="hotline">**SFL** -> **GUN**</span>: "ANZ361 via IGDAM BOREE for 34R please"  
    <span class="hotline">**GUN** -> **SFL**</span>: "ANZ361 via IGDAM BOREE for 34R"  

ARL/GUN must **voice coordinate** any requests for *track shortening* or *CSR* to SFL.

!!! tip
    If in your judgement, the request won't be available due to the sequence, there is no need to voice coordinate the requests. Just deny them.