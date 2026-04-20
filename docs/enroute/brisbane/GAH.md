---
  title: Gunnedah (GAH)
---

--8<-- "includes/abbreviations.md"
## Positions

| Name              | ID      | Callsign            | Frequency   | Login ID       |
| ----------------- | ------- | ------------------- | ----------- | -------------- |
| **Gunnedah**      | **GAH** | **Brisbane Centre** | **121.150** | **BN-GAH_CTR** |
| <span class="indented">Armidale :material-information-outline:{ title="Non-standard position"} | ARL | Brisbane Centre | 130.900 | BN-ARL_CTR |
| <span class="indented">Cessnock :material-information-outline:{ title="Non-standard position"} | CNK | Brisbane Centre | 123.400 | BN-CNK_CTR |
| <span class="indented">Denman :material-information-outline:{ title="Non-standard position"}   | DEN | Brisbane Centre | 134.150 | BN-DEN_CTR |
| <span class="indented">Lightning :material-information-outline:{ title="Non-standard position"}| LIG | Brisbane Centre | 133.000 | BN-LIG_CTR |
| <span class="indented">Moree :material-information-outline:{ title="Non-standard position"}    | MOR | Brisbane Centre | 134.850 | BN-MOR_CTR |
| <span class="indented">Rylstone :material-information-outline:{ title="Non-standard position"} | OCN | Brisbane Centre | 119.700 | BN-RYS_CTR |

!!! abstract "Non-Standard Positions"
    :material-information-outline: Non-standard positions may only be used in accordance with [VATPAC Air Traffic Services Policy](https://vatpac.org/publications/policies){target=new}.  
    Approval must be sought from the **bolded parent position** prior to opening a Non-Standard Position, unless [NOTAMs](https://vatpac.org/publications/notam){target=new} indicate otherwise (eg, for events).

## Airspace
<figure markdown>
![Gunnedah Airspace](../img/enr_diagrams/arl.png){ width="700" }
  <figcaption>Gunnedah Airspace</figcaption>
</figure>

### Reclassifications

=== "TW CTR"
	When **TW ADC** is offline, TW CTR (Class D and C `SFC` to `A085`) reverts to Class G, and is administered by ARL. Alternatively, ARL may provide a [top-down procedural service](../../../aerodromes/procedural/Tamworth) if they wish (not recommended).  
    
    !!! tip
        If choosing *not* to provide a top down service, consider publishing a pre-formatted **ATIS Zulu** for the aerodrome, to inform pilots about the airspace reclassification.

## Departure and Arrival Procedures

### YSSY
#### STAR Assignment
The following subsectors are responsible for issuing STAR clearance.

| Subsector | STAR | Type | Notes |
| ---- | ----- | -------- | ----- |
| ARL  | BOREE<br>MEPIL | Jet<br>Non-Jet  | Descent not below `F250`<br>Descent not below `F250` |

Arrivals from the north shall be given initial descent to not below `F250`. **CNK** will issue final descent.

!!! tip
    During periods of high traffic flow from the north, it may be beneficial to issue an aircraft with the adjacent STAR (e.g. a jet assigned the MEPIL STAR).  This is most common when assigning the alternate runway to an arrival.  
    
    Either **SY TCU** or **ARL** may propose utilising the adjacent STAR where two aircraft with significantly different cruise/descent speeds will be required to overtake or pass abeam each other to achieve a sequenced landing time, or if assigned different runways. This technique can allow aircraft to be processed for different runways independently with minimal delay by using the built-in separation afforded by the STAR height requirements.

!!! phraseology
    **ARL:** "RXA6417, amended tracking and STAR clearance available"  
    **RXA6417:** "RXA6417, go ahead"  
    **ARL:** "RXA6417, recleared direct BOREE for the BOREE4A arrival, runway 34L, maintain F180"  
    **RXA6417:** "Recleared direct BOREE for the BOREE4A arrival, runway 34L, maintain F180, RXA6417" 
	
#### Sequencing
Sequencing arrivals from the north/east into YSSY is a joint responsibility of the subsectors of ARL. Initial sequencing actions for aircraft from the north should be performed by ARL, with fine tuning and any holding required issued by CNK. 

Aircraft from the north/east shall be assigned **runway 16L/34R** during PROPS. However, some situations may warrant the use of the main runway (16R/34L), such as heavy aircraft operationally requiring the longer runway or large volumes of traffic requiring the use of both runways to minimise delay. In this case, coordination must be conducted with Melbourne Centre or Sydney Flow (if operating) to ensure that the sequence is built in an efficient and orderly way.

!!! phraseology
    <span class="hotline">**ARL** -> **BIK**</span>: "North of Sydney, CPA21, with your concurrence will be assigned runway 34L due operational requirement"  
    <span class="hotline">**BIK** -> **ARL**</span>: "Concur, CPA21 runway 34L, required landing time 43 due sequence from the west"  
    <span class="hotline">**ARL** -> **BIK**</span>: "Runway 34L, landing time 43, CPA21"

##### Adjacent Feeder Fixes
Aircraft assigned the **same runway** inbound via **BOREE** and **MEPIL**, must be considered to be on the **same STAR** for sequencing purposes. That is, they must be at least **2 minutes** apart at their respective Feeder fixes.

##### Holding Fixes
Refer to the vatSys Enroute Holds map for details of published holds on the airways inbound to YSSY. Where delays necessitate holding, aircraft should be instructed to hold at the following positions. The listed time should be subtracted from an aircraft's assigned feeder fix time to determine when they should leave the hold.

| Feeder Fix | Holding Fix | Time from Hold to Feeder Fix |
| ---- | ---- | ---- |
| BOREE | SADLO | 4 min |
| YAKKA | MONDO | 3 min |

!!! tip
    Additional holding may be performed at upstream holding fixes to reduce controller workload. This is particularly useful when non-standard child sectors have been opened, allowing aircraft to absorb some of their delay in the previous sector.
    
### YSTW
ARL and GAH are responsible for issuing descent.

#### Sequencing
ARL and GAH share a joint responsibility to build the final sequence of arrivals into YSTW when the tower is open. Coordination should be conducted to ensure that aircraft from each sector are sequenced appropriately with each other.

### YWLM
#### STAR Assignment
The following subsectors are responsible for issuing STAR clearance.

| Subsector | STAR | Type | Notes |
| ---- | ----- | -------- | ----- |
| ARL  | LAXUM | All      |       | 

#### Coded Clearances
The ARL subsector is additionally responsible for issuing the **STORM 2** coded clearance to aircraft arriving YWLM via the **[Thunder Corridor](#r560-r570-williamtown)**.

### YSWS
#### STAR Assignment

#### Sequencing

## Local Procedures
### Special Use Airspace
There are multiple volumes of [SUA](../../controller-skills/sua) within GAH airspace, mostly associated with military operations in and out of YWLM.

<figure markdown>
![Notable SUA in GAH Airspace](../img/arl_sua.png){ width="700" }
  <figcaption>Notable SUA in GAH Airspace</figcaption>
</figure>

WLM TCU (or MNN on their behalf) will coordinate the activation these SUA **prior** to any activity.

#### R560 & R570 Williamtown
The R560A-B and R570A-H restricted areas are located west of YWLM and YSTW within the ARL and GAH subsectors. The restricted areas are connected to the WLM TCU by the **Thunder Corridor**.

<figure markdown>
![WLM Thunder Military Corridor](../img/wlm_thunder.png){ width="500" }
  <figcaption>WLM Thunder Military Corridor</figcaption>
</figure>

Aircraft departing the WLM TCU will be cleared the **STORM 1** coded clearance. Aircraft returning to the TCU will be cleared the **STORM 2** coded clearance by GAH.

!!! phraseology
    *BARN21 has completed their military training operations in R570, and intends to return to base.*
    **BARN21**: "Brisbane Centre, BARN21"  
    **GAH**: "BARN21, Brisbane Centre, identified"  
    **BARN21**: "Brisbane Centre, BARN21, detail complete, for RTB, `F130`"  
    **GAH**: "BARN21, cleared Storm 2. At THNDA, contact Willy Approach, 135.7"  
    **BARN21**: "Cleared Storm 2, at THNDA contact Willy Approach, BARN21"  
    
!!! note
    Aircraft tracking via the STORM coded clearances does **not** constitute a voiceless coordination route between WLM TCU and GAH. Aircraft should still be heads-up coordinated prior to **5 minutes** to the boundary, unless coordinated otherwise.

Aircraft transiting the Thunder Corridor should be assigned the appropriate altitude to ensure separation with opposite direction traffic while transiting to their desired restricted area.

| Coded Clearance | Altitude |
| --------------- | -------- |
| STORM 1         | `F140`   |
| STORM 2         | `F130`   |

##### Affected Civil Operations
When activated these restricted areas distrupt traffic on the **Q16**, **Q235**, **Q293**, and **Y46** high altitude airways, used by aircraft travelling between YPAD-YBBN, and YSSY-North Queensland/East Asia.

| Planned Airway | ERSA Recommended Rerouting |
| -------------- | -------------------------- |
| Q16 | via `Q4` |
| Q235 | `... RIC H530 KABIX ...` |
| Q293 | `... RIC H530 KABIX ...` |
| Y46 | via `Y27` |

Aircraft travelling below `F240` on the **H66**, **H76**, and **Q35** airways are also disrupted, most directly affecting aircraft departing YSBK to the northwest, and aircraft climbing out of YSSY via RIC. These aircraft may be given altitude requirements to assure separation with the restricted areas, where appropriate.

!!! note
	Aircraft tracking via a recommended rerouting must still be [separated from the SUA](../../sua/#separation-from-sua)  laterally and vertically. After amending flight plans for the purposes of rerouting around SUA, controllers should ensure the route is displayed visually and the BRL is used to measure for [>2.5nm](../../sua/#controlled-airspace) clearance with all parts of the SUA.

## STAR Clearance Expectation
### Handoff
Aircraft being transferred to the following sectors shall be told to Expect STAR Clearance on handoff:

| Transferring Sector | Receiving Sector | ADES | Notes |
| ---- | -------- | --------- | --------- |
| LIG | GUN(KAT) | YSCB | |
| CNK | GUN(BIK) | YSCB | Jets only |
| RYS | ARL | YSSY | |

## Terminal Handover Frequencies
Aircraft being transferred from enroute to a TCU with multiple frequencies shall be given the frequency for the revelant TCU position.

=== "SY TCU"
	=== "07AD"
		<figure markdown>
		![SY TCU Handover Frequencies - 07AD Mode](../img/enr-tcu_handovers/sy07ad.png){ width="500" }
		  <figcaption>SY TCU Handover Frequencies - 07AD Mode</figcaption>
		</figure>
		
	=== "25AD"
		<figure markdown>
		![SY TCU Handover Frequencies - 25AD Mode](../img/enr-tcu_handovers/sy25ad.png){ width="500" }
		  <figcaption>SY TCU Handover Frequencies - 25AD Mode</figcaption>
		</figure>
	=== "16 PROPS"
		<figure markdown>
		![SY TCU Handover Frequencies - 16 PROPS Mode](../img/enr-tcu_handovers/sy16props.png){ width="500" }
		  <figcaption>SY TCU Handover Frequencies - 16 PROPS Mode</figcaption>
		</figure>
	=== "34 PROPS"
		<figure markdown>
		![SY TCU Handover Frequencies - 34 PROPS Mode](../img/enr-tcu_handovers/sy34props.png){ width="500" }
		  <figcaption>SY TCU Handover Frequencies - 34 PROPS Mode</figcaption>
		</figure>
	=== "SODPROPS"
		<figure markdown>
		![SY TCU Handover Frequencies - SODPROPS Mode](../img/enr-tcu_handovers/sysodprops.png){ width="500" }
		  <figcaption>SY TCU Handover Frequencies - SODPROPS Mode</figcaption>
		</figure>


	| ADES | STAR  | Frequency (Controller) |
	| ---- | ----- | ---------------------- |
	| YSSY | BOREE | **124.400** (SAN)      |
	| YSSY | MARLN | **124.400** (SAN)      |
	| YSSY | MEPIL | **124.400** (SAN)      |
	| YSSY | ODALE | **128.300** (SAS)      |
	| YSSY | RIVET | **128.300** (SAS)      |

	!!! tip
		The quick reference tables above only include scenarios for which there is [voiceless coordination](#sy-tcu). Refer to the diagram for the appropriate position/frequency for coordination and handoff for all other situations.

## Coordination
### SY TCU
#### Airspace
SY TCU is responsible for the airspace within a 45nm radius of TESAT, `SFC` to `F285`.

Refer to [Sydney TCU Airspace Division](../../../terminal/sydney/#airspace-division) for information on airspace divisions when **SAS**, **SDN**, **SDS** and/or **SRI** are online.

#### Arrivals/Overfliers
Voiceless for all aircraft:

- With ADES **YSSY**; and  
- Assigned a STAR; and  
- Tracking via **BOREE**, assigned `A100`; or  
- Tracking via **MEPIL**, assigned `A090`

All other aircraft coming from ARL CTA must be **Heads-up** Coordinated to SY TCU prior to **20nm** from the boundary.

#### Departures
Voiceless for all aircraft:

- Assigned the lower of `F280` or the `RFL`; and
- that enter GAH airspace via any of the *Green Shaded Corridors* below, excluding [YWLM Arrivals](#ywlm-arrivals)

<figure markdown>
![SY TCU Voiceless Coordination Corridors](../img/sytcucoordgate.png){ width="700" }
  <figcaption>SY TCU Voiceless Coordination Corridors</figcaption>
</figure>

All other aircraft going to GAH CTA will be **Heads-up** Coordinated by SY TCU.

### Enroute
As per [Standard coordination procedures](../../../controller-skills/coordination/#enr-enr), Voiceless, no changes to route or CFL within **50nm** to boundary.

### GAH Internal
As per [Standard coordination procedures](../../../controller-skills/coordination/#enr-enr), Voiceless, no changes to route or CFL within **50nm** to boundary.

### TW ADC
#### Airspace
TW ADC is responsible for the Class D airspace in the TW CTR `SFC` to `A045`, as well as the Class C airspace between `A045` and `A065`.

Refer to [Reclassifications](#reclassifications) for operations when TW ADC is offline.

#### Departures
[Next](../../controller-skills/coordination.md#next) coordination is required from TW ADC to ARL/GAH for all aircraft **entering ARL/GAH CTA**.

The Standard Assignable level from **TW ADC** to **ARL/GAH** is:

| Aircraft | Level |
| ---- | ---- |
| All | The lower of `A070` and `RFL` |

#### Arrivals/Overfliers
YSTW arrivals and overfliers shall be heads-up coordinated to **TW ADC** from ARL/GAH prior to **5 mins** from the boundary.

!!! phraseology
    <span class="hotline">**GAH** -> **TW ADC**</span>: "QLK6D, via MATLA DCT ST2WD"  
    <span class="hotline">**TW ADC** -> **GAH**</span>: "QLK6D"  

The Standard Assignable level from ARL/GAH to **TW ADC** is `A080`, any other level must be prior coordinated.