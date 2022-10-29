---
  title: Bindook (BIK)
---

--8<-- "includes/abbreviations.md"
## Positions

| Name | Callsign | Frequency | Login ID |
| ---- | -------- | --------- | -------- |
| **Bindook** | **Melbourne Centre** | **129.800** | **ML-BIK_CTR** |
| Wollongong† | Melbourne Centre | 125.000 | ML-WOL_CTR |
| Gundagai† | Melbourne Centre | 128.400 | ML-GUN_CTR |

† **Non-standard position** – may only be used in accordance with [VATPAC Ratings and Controller Positions Policy](https://cdn.vatpac.org/documents/policy/Controller+Positions+and+Ratings+Policy+v5.2.pdf){target=new}
## Airspace

BIK is responsible for the SY TCU when **SY APP** is offline.  
BIK is responsible for **WOL** and **GUN** when they are offline.

Bindook also assumes responsiblity of:  
a) The airspace within 45nm of SY DME above FL280  
b) The airspace within the lateral limits of the CB TCU above FL245, except for the region south west which is assumed by Benalla (BLA)
// required if we just provide vatsys map?

!!! note
    Bindook does not assume the CB TCU in the absence of a CB TCU controller. Assumption of the CB TCU is the responsibility of Benalla (BLA). Controllers may choose to verbally coordinate the release of the CB TCU to either sector/subsector.

(vatsys map)
## Sector Responsibilities
### Bindook (BIK)
BIK will provide final sequencing actions to ensure aircraft comply with their FF times prior to entering the Sydney TMA. Bindook (BIK) shall assign the standard assignable altitude in accordance with the table above. 
For aircraft overflying the SY TMA place 'O/FLY' in the LABEL DATA field.
### Wollongong (WOL)
WOL is responsible for assigning and issueing arrival clearance to aircraft inbound to Canberra via RAZZI annd BUNGO. WOL will issue aircraft an initial descent clearance to the standard assignable level.
### Gundagai (GUN)
GUN assigns and issues arrival clearance for aircraft inbound to Sydney via RIVET and ODALE. GUN will assing aircraft an initial descent clearance to FL250. GUN will transfer responsibility of control to BIK at the latter of:  
a) readback of STAR and descent clearance  
b) xxx NM from BIK/GUN border //do we need this info? will standard handoff procedures be adequate?

## Coordination
### BIK/WOL / SY TCU
#### Standard Assignable Levels
The Standard assignable level from BIK to SY TCU is:  
`A100` for aircraft tracking via RIVET, and assigned the RIVET # STAR  
`A090` for aircraft tracking via ODALE, and assigned the ODALE # STAR  

All other aircraft must be voice coordinated to SY TCU prior to **20nm** from the boundary.

### WOL/GUN / CB TCU
#### Standard Assignable Levels

The Standard assignable level from WOL to CB TCU is `F120`, and assigned the RAZZI #, BUNGO #, or AVBEG # STAR.  

All other aircraft must be voice coordinated to CB TCU prior to **20nm** from the boundary.

!!! note
    These coordination requirements apply to aircraft entering the CB TCU, even if the airspace is owned by ELW/BLA

### BIK (All) / ENR

As per the enroute coordination requirements (link), voiceless coordination exists between enroute sectors, with no changes within 20nm to the boundary.

That being said, it is *advised* that BIK give **Heads-up Coordination** to the relevant sector, prior to **20nm** from the boundary, for **any aircraft not on the Q29 or V169 airways**. 

### WOL / TSN (Oceanic)

As per [Standard coordination procedures](http://sops.vatpac.org/controller-skills/coordination/){target=new}.

### BIK/WOL/GUN Internal

As per [Standard coordination procedures](http://sops.vatpac.org/controller-skills/coordination/){target=new}.

That being said, it is *advised* that BIK/WOL/GUN give **Heads-up Coordination** to the relevant sector, prior to **20nm** from the boundary, for **any aircraft not on the Q29, Y59, W113, or V169 airways**. 

### WOL / NW APP
#### Departures
Departures from YSNW in to WOL Class C will be coordinated at taxi, and will be requesting a level.

!!! example
    **NW APP** -> **WOL**: "Taxi, PSDN18 for YMCO via URBOB, Requesting F130"  
    **WOL** -> **NW APP**: "PSDN18, F130"  
    **NW APP** -> **WOL**: "F130, PSDN18"  

#### Arrivals/Overfliers
All aircraft transiting from WOL to **NW APP** must be heads-up coordinated prior to **20nm** from the boundary. Operations within **NW APP** are fairly ad-hoc, so there are no standard assignable levels, simply whatever the WOL and **NW APP** controller agree on.

!!! example
    **WOL** -> **NW APP**: "via CB, SKJ, with your concurrence, will be assigned descent to A090"  
    **NW APP** -> **WOL**: "SKJ, concur A090"  