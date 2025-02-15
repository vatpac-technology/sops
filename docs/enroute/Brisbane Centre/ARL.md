---
  title: Armidale (ARL)
---

--8<-- "includes/abbreviations.md"
## Positions

| Name | Callsign | Frequency | Login ID |
| ---- | -------- | --------- | -------- |
| **Armidale** | **Brisbane Centre** | **130.900** | **BN-ARL_CTR** |
| <span class="indented">Mudgee :material-information-outline:{ title="Non-standard position"} | Brisbane Centre | 133.000 | BN-MDE_CTR |
| <span class="indented">Cessnock :material-information-outline:{ title="Non-standard position"} | Brisbane Centre | 123.400 | BN-CNK_CTR |
| <span class="indented">Manning :material-information-outline:{ title="Non-standard position"} | Brisbane Centre | 130.100 | BN-MNN_CTR |
| <span class="indented">Maitland :material-information-outline:{ title="Non-standard position"} | Brisbane Centre | 132.350 | BN-MLD_CTR |
| <span class="indented">Ocean :material-information-outline:{ title="Non-standard position"} | Brisbane Centre | 128.600 | BN-OCN_CTR |

!!! abstract "Non-Standard Positions"
    :material-information-outline: Non-standard positions may only be used in accordance with [VATPAC Air Traffic Services Policy](https://vatpac.org/publications/policies){target=new}.  
    Approval must be sought from the **bolded parent position** prior to opening a Non-Standard Position, unless [NOTAMs](https://vatpac.org/publications/notam){target=new} indicate otherwise (eg, for events).

### CPDLC

The Primary Communication Method for ARL is Voice.

[CPDLC](../../../client/cpdlc) may be used in lieu when applicable.

The CPDLC Station Code is `YARL`.

!!! tip
    Even though ARL's Primary Communication Method is Voice, CPDLC may be used for Overfliers.

## Airspace

<figure markdown>
![Armidale Airspace](../assets/arl.png){ width="700" }
  <figcaption>Armidale Airspace</figcaption>
</figure>

### Reclassifications
#### TW CTR
When **TW ADC** is offline, TW CTR (Class D and C `SFC` to `A085`) reverts to Class G, and is administered by ARL and MDE. Alternatively, ARL (not MDE) may provide a [top-down procedural service](../../../aerodromes/tamworth) if they wish (not recommended).  

!!! tip
    If choosing *not* to provide a top down service, consider publishing an **ATIS Zulu** for the aerodrome, to inform pilots about the airspace reclassification. The *More ATIS* plugin has a formatted Zulu ATIS message.

#### CFS CTR
When **CFS ADC** is offline, CFS CTR (Class D `SFC` to `A045`) reverts to Class G, and is administered by MNN and INL. MNN is **not permitted** to provide a [top-down procedural service](../../../aerodromes/Coffs), only INL can do this, and they must coordinate with MNN if they are doing so.

#### WLM CTR
When **WLM TCU** is offline, WLM MIL CTR (Class C `SFC` to `A065`) reverts to Class G, and WLM MIL CTR (Class C `A065` to `F125`) reverts to Class E. This airspace is administered by the appropriate ARL subsector. Alternatively, ARL(MLD) may provide a [top-down service](../../../military/williamtown) if they wish.  

!!! tip
    If choosing *not* to provide a top down service, consider publishing an **ATIS Zulu** for the aerodrome, to inform pilots about the airspace reclassification. The *More ATIS* plugin has a formatted Zulu ATIS message.

## Sector Responsibilities
### Armidale (ARL) / Manning (MNN)
ARL and MNN are responsible for initial sequencing, issuing STAR Clearances, and issuing initial descent for aircraft bound for YSSY, via BOREE and MEPIL respectively. Aircraft cruising above `F250` should be assigned *no lower* than `F250` and handed to CNK for further descent. Aircraft cruising below `F250` should be transferred to CNK at their cruise level.

Refer to the [Sequencing into YSSY](#sequencing-into-yssy) notes below for runway and STAR selection notes.

ARL is also responsible for aircraft operating into/out of YSTW from the south/east when TW ADC is operating.

!!! note
    ARL and MDE share a joint responsibility to build the final sequence of arrivals into YSTW when the tower is open. Coordination with MDE should be conducted to ensure that aircraft from each sector are sequenced appropriately with each other.

### Cessnock (CNK) 
CNK is responsible for final sequencing and descent for aircraft bound for YSSY, via BOREE and MEPIL.

Refer to the [Sequencing into YSSY](#sequencing-into-yssy) notes below for runway and STAR selection notes.

### Maitland (MLD)
MLD is responsible for handling northbound departures from YSSY and arrivals into YWLM from the south.

### Mudgee (MDE)
MDE is responsible for aircraft operating into/out of YSTW from the north/west when TW ADC is operating.

!!! note
    ARL and MDE share a joint responsibility to build the final sequence of arrivals into YSTW when the tower is open. Coordination with ARL should be conducted to ensure that aircraft from each sector are sequenced appropriately with each other.

### Ocean (OCN)
OCN is responsible for sequencing, issuing STAR Clearances, and issuing descent for aircraft bound for YSSY via MARLN.

Refer to the [Sequencing into YSSY](#sequencing-into-yssy) notes below for runway selection notes.

### YWLM Operations
All ARL subsectors are responsible for assigning STARs to aircraft inbound to YWLM, and the STAR shall be issued by the first ARL subsector to take jurisdiction of the aircraft.

### Sequencing into YSSY
Sequencing arrivals from the north/east into YSSY is a joint responsibility of the subsectors of ARL. Initial sequencing actions for aircraft from the north should be performed by ARL and MNN, with fine tuning and any holding required issued by CNK. 

Aircraft from the north/east shall be assigned **runway 16L/34R** during PROPS. However, some situations may warrant the use of the main runway (16R/34L), such as heavy aircraft operationally requiring the longer runway or large volumes of traffic requiring the use of both runways to minimise delay. In this case, coordination must be conducted with Melbourne Centre or Sydney Flow (if operating) to ensure that the sequence is built in an efficient and orderly way.

!!! phraseology
    <span class="hotline">**ARL** -> **BIK**</span>: "North of Sydney, CPA21, with your concurrence will be assigned runway 34L due operational requirement"  
    <span class="hotline">**BIK** -> **ARL**</span>: "Concur, CPA21 runway 34L, required landing time 43 due sequence from the west"  
    <span class="hotline">**ARL** -> **BIK**</span>: "Runway 34L, landing time 43, CPA21"

Jet aircraft for YSSY shall be assigned the **BOREE** STAR.  
Non-jet aircraft for YSSY shall be assigned the **MEPIL** STAR.

!!! tip
    Whilst the preference is to keep jet/non-jet aircraft assigned the default STAR as above, there are situations where the sequence may be improved by assigning the adjacent STAR (e.g. a jet assigned the MEPIL STAR). This is most common when assigning the alternate runway to an arrival.  
    
    Either **SY TCU** or **ARL** may propose utilising the adjacent STAR where two aircraft with significantly different cruise/descent speeds will be required to overtake or pass abeam each other to achieve a sequenced landing time, or if assigned different runways. This technique can allow aircraft to be processed for different runways independently with minimal delay by using the built-in separation afforded by the STAR height requirements.  

    In this case, coordination should be conducted to ensure that both controllers agree and no additional conflicts are created as a result (particularly with aircraft inbound from the south/west).

!!! phraseology
    **ARL:** "RXA6417, amended tracking and STAR available"  
    **RXA6417:** "RXA6417, go ahead"  
    **ARL:** "RXA6417, recleared direct BOREE for the BOREE4A arrival, runway 34L, maintain FL180"  
    **RXA6417:** "Recleared direct BOREE for the BOREE4A arrival, runway 34L, maintain FL180, RXA6417"

#### Adjacent Feeder Fixes
Aircraft assigned the **same runway** inbound via **BOREE** and **MEPIL**, must be considered to be on the **same STAR** for sequencing purposes. That is, they must be at least **2 minutes** apart at their respective Feeder fixes.

## STAR Clearance Expectation
### Handoff
Aircraft being transferred to the following sectors shall be told to Expect STAR Clearance on handoff:

| Transferring Sector | Receiving Sector | ADES | Notes |
| ---- | -------- | --------- | --------- |
| MNN | INL | YBBN, YBCG | |
| MDE | YWE(KAT) | YSCB | |
| MNN | ARL | YSSY | |

### First Contact
Aircraft being transferred from the following sectors shall be given STAR Clearance on first contact:

| Transferring Sector | Receiving Sector | ADES | Notes |
| ---- | -------- | --------- | --------- |
| INL, MNN | ARL | YSSY | |
| TSN/HWE | OCN | YSSY | |

## Coordination
### SY TCU
#### Airspace
SY TCU is responsible for the airspace within a 45nm radius of TESAT, `SFC` to `F285`.

Refer to [Sydney TCU Airspace Division](../../../terminal/sydney/#airspace-division) for information on airspace divisions when **SAS**, **SDN**, **SDS** and/or **SRI** are online.

#### Arrivals/Overfliers
Voiceless for all aircraft:

- With ADES **YSSY**; and  
- Assigned a STAR; and  
- Tracking via **MARLN** or **BOREE**, assigned `A100`; or  
- Tracking via **MEPIL**, assigned `A090`

All other aircraft coming from ARL CTA must be **Heads-up** Coordinated to SY TCU prior to **20nm** from the boundary.

#### Departures
Voiceless for all aircraft:

- Assigned the lower of `F280` or the `RFL`; and
- that enter ARL airspace via any of the *Green Shaded Corridors* below, excluding [YWLM Arrivals](#ywlm-arrivals)

<figure markdown>
![SY TCU Voiceless Coordination Corridors](../assets/sytcucoordgate.png){ width="700" }
  <figcaption>SY TCU Voiceless Coordination Corridors</figcaption>
</figure>

All other aircraft going to ARL CTA will be **Heads-up** Coordinated by SY TCU.

##### YWLM Arrivals
Additionally, Voiceless Coordination exists from SY TCU for aircraft:

- With ADES **YWLM**; and  
- Assigned a STAR; and  
- Tracking from **SDN** or **SDS** [airspace](../../../terminal/sydney/#airspace-division); and  
- Assigned the lower of `F130` or the `RFL`

!!! note
    YWLM arrivals are handed off to MLD, not directly to WLM TCU, unless coordinated as such

### Enroute
As per [Standard coordination procedures](../../../controller-skills/coordination/#enr-enr), Voiceless, no changes to route or CFL within **50nm** to boundary.

### ARL Internal
As per [Standard coordination procedures](../../../controller-skills/coordination/#enr-enr), Voiceless, no changes to route or CFL within **50nm** to boundary.

That being said, due to their small sizes and frequent random-track traffic, it is *advised* that ARL(All) gives **Heads-up Coordination** in the following scenarios:   

- MNN to ARL for all aircraft  
- ARL to MNN for all aircraft  
- CNK to MLD for all aircraft  
- MLD to CNK for all aircraft

### TW ADC
#### Airspace
TW ADC is responsible for the Class D airspace in the TW CTR `SFC` to `A045`, as well as the Class C airspace between `A045` and `A065`.

Refer to [Reclassifications](#tw-ctr) for operations when TW ADC is offline.

#### Departures
Departures from YSTW in to ARL/MDE Class C will be coordinated when ready for departure.

!!! phraseology
    <span class="hotline">**TW ADC** -> **MDE**</span>: "Next, SKV"  
    <span class="hotline">**MDE** -> **TW ADC**</span>: "SKV, Unrestricted"  
    <span class="hotline">**TW ADC** -> **MDE**</span>: "SKV"  

The Standard Assignable level from **TW ADC** to ARL/MDE is the lower of `A070` or the `RFL`.

#### Arrivals
YSTW arrivals shall be heads-up coordinated to **TW ADC** from ARL/MDE prior to **5 mins** from the boundary.

!!! phraseology
    <span class="hotline">**ARL** -> **TW ADC**</span>: "QLK6D, via MATLA DCT STWWD"  
    <span class="hotline">**TW ADC** -> **ARL**</span>: "QLK6D"  

The Standard Assignable level from ARL/MDE to **TW ADC** is `A080`, any other level must be prior coordinated.

### CFS ADC
#### Airspace
CFS ADC is responsible for the Class D airspace in the CFS CTR `SFC` to `A045`.

Refer to [Reclassifications](#cfs-ctr) for operations when CFS ADC is offline.

#### Departures
Departures from YCFS in to MNN Class C will be coordinated when ready for departure.

!!! phraseology
    <span class="hotline">**CFS ADC** -> **MNN**</span>: "Next, CFH21"  
    <span class="hotline">**MNN** -> **CFS ADC**</span>: "CFH21, Unrestricted"  
    <span class="hotline">**CFS ADC** -> **MNN**</span>: "CFH21"  

The Standard Assignable level from **CFS ADC** to MNN is the lower of `A070` or the `RFL`.

#### Arrivals
YCFS arrivals shall be heads-up coordinated to **CFS ADC** from MNN prior to **5 mins** from the boundary.

!!! phraseology
    <span class="hotline">**MNN** -> **CFS ADC**</span>: "Via KADSI, RXA6438"  
    <span class="hotline">**CFS ADC** -> **MNN**</span>: "RXA6438"  

The Standard Assignable level from MNN to **CFS ADC** is `A080`, any other level must be prior coordinated.

### WLM TCU
#### Airspace
By default, **WLM TCU** (when online) owns the airspace within the WLM MIL CTR `SFC` to `F125`, unless stated otherwise by ad-hoc release or NOTAM. It is the responsibility of the **WLM TCU** controller to inform ARL(All) of what airspace they are assuming.

Refer to [Reclassifications](#wlm-ctr) for operations when WLM TCU is offline.

#### Departures
Voiceless for all aircraft:

- Tracking via a Procedural SID terminus; and  
- Assigned the lower of `F120` or the `RFL`

All other aircraft going to ARL CTA will be **Heads-up** Coordinated by WLM TCU.

!!! phraseology
    <span class="hotline">**WLM TCU** -> **MLD**</span>: "QJE1597, request DCT OMGAB"  
    <span class="hotline">**MLD** -> **WLM TCU**</span>: "QJE1597, concur DCT OMGAB"  

#### Arrivals/Overfliers
Voiceless for all aircraft:

- With ADES **YWLM**; and  
- Assigned a STAR; and  
- Assigned `A090`

All other aircraft coming from ARL CTA must be **Heads-up** Coordinated to WLM TCU prior to **20nm** from the boundary.

!!! phraseology
    <span class="hotline">**CNK** -> **WLM TCU**</span>: "QFA1968, request DCT UPTEB"  
    <span class="hotline">**WLM TCU** -> **CNK**</span>: "QFA1968, concur DCT UPTEB"  

### TSN/HWE (Oceanic)
As per [Standard coordination procedures](../../../controller-skills/coordination/#pacific-units), Voiceless, no changes to route or CFL within **15 mins** to boundary.

Aircraft must have their identification terminated and be instructed to make a position report on first contact with the next (procedural) sector.

!!! phraseology
    **ARL**: "QFA121, identification terminated, report position to Brisbane Radio, 126.45"