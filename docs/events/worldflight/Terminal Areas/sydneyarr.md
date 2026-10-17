---
  title: 4. Sydney (YSSY) Arrivals
---

--8<-- "includes/abbreviations.md"

## Airspace Division
Standard airspace divisions will be used for the event.

The arrival streams will be split between the RIVET and BOREE STARs.

## Approach Procedures
Independent Visual Approaches can be expected to be in use for the event, to facilitate the high volume of traffic for both runways.

Aircraft must report the **runway in sight** (or **visual** if established on the final approach course) in order to be cleared for an IVA (Runway in Sight implies Visual).

!!! tip
    The [Label Data Annotations](../../../client/annotations.md#miscellaneous) for these are `V` for *Visual*, and `R` for *Runway in Sight*

Ensure you familiarise yourself with the applicable [Separation Standards](../../../separation-standards/parallelapps.md#independent-visual-approaches)

Pass *Traffic Information* on aircraft that will come within **1nm** of each other on parallel approaches.

!!! phraseology
    **SFW:** "NPT11W, traffic is a 767 ahead for the parallel runway"

## WorldFlight Scenic Arrival
Most offical WorldFlight teams will conclude the event by flying the Scenic Arrival, including a low-level flight through Sydney Harbour. This procedure is flown OCTA until east of Harbour Bridge (HBB).

Aircraft will be transferred to SAN assigned `A090` tracking from **WLM** to **LRF**. Clear these aircraft to leave CTA on descent with a requirement to be established **OCTA by LRF**.

!!! phraseology
    *'QFA25, leave controlled airspace descending, requirement to be established OCTA by LRF'*

From LRF, the aircraft will descend to `A005` and track `LRF HSY RYB HBB`. Passing HBB to the east, they will climb to `A015` and turn direct to YSSY to join the circuit for RWY 16L/34R. 

Participating aircraft will transfer to SY ADC on their own as they approach the circuit.

<figure markdown>
![Scenic Arrival](../img/worldflight-scenic-arrival.png){ width="600" }
</figure>

WorldFlight Teams will be highlighted by default and should receive priority at all stages of flight.

<figure markdown>
![WF Team Highlight](../img/wfteam.png){ width="400" }
<figcaption>WF Team Highlight</figcaption>
</figure>

### Late Arrivals
When the first wave of participating aircraft arrive, RWY 16L/34R will be blocked off for a period of approximately 30 minutes. During this window, only participating aircraft may land on the runway.

Once the window closes, all event aircraft will be divided between the parallel runways and the scenic arrival will not be available. If an official team aircraft misses the window and requests the scenic arrival, **SFL** must be informed. They will determine whether the procedure is available.

## Sector Distribution
In order to balance workload effectively, it is recommended to distribute responsibility for the Sydney TCU sectors accordingly:

### Two Controllers Online

- SAS and SFW combined
- SAN and SFE combined
- No SFL

### Three Controllers Online

- SAS and SFW combined
- SAN and SFE combined
- SFL on its own

### Four Controllers Online

- SAS and SAN combined
- SFW on its own
- SFE on its own
- SFL on its own

## Flow
SFL shall assess the stream of aircraft in **BKE** and use [MAESTRO](../../../client/maestro.md) to assign runways based on a 50/50 split. BKE will use the runway nomination to reclear aircraft for 16L/34R via `IGDAM BOREE`. 

Whilst BKE is responsible for recomputing rerouted aircraft, SFL should monitor these aircraft to ensure their feeder fix has been updated.

!!! tip
    To avoid late reroutes back for the main runway, consider placing larger aircraft on runway 16R/34L and rerouting smaller aircraft, where possible.

Official WorldFlight team aircraft may choose to conduct the [Scenic Arrival](#worldflight-scenic-arrival) into YSSY. When the landing time for the first participating aircraft has been calculated, runway 16L/34R shall be blocked off for a period of 30 minutes (or longer if deemed appropriate without causing undue delay to other event aircraft). All arrivals shall be assigned runway 16R/34L.

!!! tip
    Participating aircraft will not be tracking via a feeder fix and will only be visible on the `RUNWAY` view in MAESTRO.

It may be easier for SFL to desequence all participating aircraft and add a slot to the ladder for the duratiton of the scenic arrival window.

!!! warning "Important"
    It is likely that during the peak of the event, there will be **no opportunity** for non-event traffic to be sequenced for a landing at YSSY. Flow should determine whether an approach slot is available and inform the appropriate enroute controller if a diversion to another aerodrome is necessary.

## Coordination
#### Between ARL/GUN and SFL
SFL will construct the sequence via [MAESTRO](../../../client/maestro.md). 

SFL must **voice coordinate** to GUN any aircraft that must be rerouted via **IGDAM BOREE** for **16L/34R**.

GUN will **voice coordinate** any requirements for an alternate runway to SFL.

!!! phraseology
    <span class="hotline">**SFL** -> **GUN**</span>: "ANZ361 via IGDAM BOREE for 34R please"  
    <span class="hotline">**GUN** -> **SFL**</span>: "ANZ361 via IGDAM BOREE for 34R"  

ARL/GUN will **voice coordinate** any requests for *track shortening* or *CSR* to SFL.