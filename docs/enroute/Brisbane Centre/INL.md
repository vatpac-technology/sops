---
  title: Inverell (INL)
---

--8<-- "includes/abbreviations.md"
## Positions

| Name | Callsign | Frequency | Login ID |
| ---- | -------- | --------- | -------- |
| **Inverell** | **Brisbane Centre** | **134.200** | **BN-INL_CTR** |
| Downs† | Brisbane Centre | 135.600 | BN-DOS_CTR |
| Gold Coast† | Brisbane Centre | 130.400 | BN-GOL_CTR |
| Straddy† | Brisbane Centre | 134.300 | BN-SDY_CTR |
| Burnett† | Brisbane Centre | 123.000 | BN-BUR_CTR |
| Noosa† | Brisbane Centre | 124.100 | BN-NSA_CTR |
| Keppel† | Brisbane Centre | 125.900 | BN-KPL_CTR |

† **Non-standard position** – may only be used in accordance with [VATPAC Ratings and Controller Positions Policy](https://cdn.vatpac.org/documents/policy/Controller+Positions+and+Ratings+Policy+v5.2.pdf)

## Airspace

GOL is responsible for the [BN TCU](../../../terminal/brisbane) when **BN APP** is offline.  
GOL is responsible for the [RK TCU](../../../terminal/coral) when **RKA** is offline.  
INL is responsible for **DOS**, **GOL**, **SDY**, **BUR**, **NSA**, and **KPL** when they are offline.  

When **SU TWR** is offline, SU CTR (Class D SFC-A045) reverts to Class G, and is administered by NSA and BUR. Alternatively, NSA may provide a [top-down procedural service](../../../aerodromes/sunshinecoast) if they wish (not recommended), and this must be coordinated to BUR.  
When **CFS TWR** is offline, CFS CTR (Class D SFC-A045) reverts to Class G, and is administered by MNN and INL. Alternatively, INL may provide a [top-down procedural service](../../../aerodromes/Coffs) if they wish (not recommended), and this must be coordinated to ARL(MNN).  

Whilst the **RKA** controller is expected to provide a [top-down service](../../../aerodromes/Rockhampton) to YBRK when **RK TWR** is offline, this is not expected of a GOL controller when both **RKA** and **RK TWR** are offline. If electing not to provide a top-down service to YBRK, the RK CTR Class D is reclassified to Class G SFC-A007, and Class E A007-A045.

<figure markdown>
![Inverell Airspace](../assets/INLENR.png){ width="700" }
  <figcaption>Inverell Airspace</figcaption>
</figure>

## Sector Responsibilities
### Inverell (INL) / Downs (DOS) / Straddy (SDY) / Burnett (BUR)
INL, DOS, SDY and BUR are responsible for initial sequencing, issuing STAR Clearances, and issuing initial descent for aircraft bound for YBBN and YBCG.
### Gold Coast (GOL)
GOL is responsible for final sequencing for aircraft bound for YBBN, YBCG, and issuing of STAR Clearances and descent for YBSU.
### Noosa (NSA)
NSA is responsible for facilitating YBSU traffic.
### Keppel (KPL)
KPL is responsible for issuing STAR Clearances and descent for YBSU.

## Coordination
### INL(All) / BN TCU

The Standard assignable level from INL(All) to BN TCU is:  
`A090` for YBBN arrivals, and assigned a STAR  
`F130` for YBCG arrivals via BERNI, and assigned a STAR  

All other aircraft must be voice coordinated to BN TCU prior to **20nm** from the boundary.

The Standard Assignable level for YBBN departures from BN TCU to **INL(All)** is the lower of `F180` or the `RFL`.  
The Standard Assignable level for YBCG departures from BN TCU to **GOL/SDY** is the lower of `F120` or the `RFL`, and tracking via APAGI.  
The Standard Assignable level for YBCG departures from BN TCU to **NSA/BUR/DOS** is the lower of `F180` or the `RFL`.  
The Standard Assignable level for YBSU arrivals from BN TCU to **NSA** is `F130`, and tracking via ITIDE.  

Refer to [Brisbane TCU Airspace Division](../../../terminal/brisbane/operations/#airspace-division) for information on airspace divisions when **BAS**, **BDN** and/or **BDS** are online.
### INL (All) / ENR

As per [Standard coordination procedures](../../../controller-skills/coordination/#enr-enr), Voiceless, no changes to route or CFL within **20nm** to boundary.

### INL/DOS/GOL/SDY/BUR/NSA/KPL Internal

As per [Standard coordination procedures](../../../controller-skills/coordination/#enr-enr), Voiceless, no changes to route or CFL within **20nm** to boundary.

That being said, it is *advised* that INL(All) give **Heads-up Coordination** to the relevant sector prior to **20nm** from the boundary in the following scenarios:  
- INL to DOS for all aircraft  
- DOS to BUR, NSA, GOL and INL for all aircraft  
- SDY to NSA, GOL and INL for all aircraft  

### NSA / SU TWR
#### Airspace
When **SU TWR** is online, **NSA** owns the Class C airspace from A045 upwards. **SU TWR** owns the Class D airspace SFC-A045.

#### Departures
Departures from YBSU in to NSA Class C will be coordinated at taxi, and ready for departure. If a level other than the Standard Assignable is required from NSA, they will coordinate this at the "Next" call.

!!! example
    **SU TWR** -> **NSA**: "Taxi, BNZ123 for YBSU via TAPET1 departure"  
    **NSA** -> **SU TWR**: "BNZ123"  
    ...  
    **SU TWR** -> **NSA**: "Next, BNZ123"  
    **NSA** -> **SU TWR**: "BNZ123"  

The Standard Assignable level from **SU TWR** to NSA is the lower of `A050` or the `RFL`.

#### Arrivals
The Standard Assignable level from NSA to **SU TWR** is `A060`. Any aircraft that will not be assigned the Standard Assignable level must have that level concurred by **SU TWR**.  
NSA will ensure all YBSU arrivals have been assigned a STAR, unless the pilot is unable to accept one.  
YBSU arrivals shall be coordinated to **SU TWR** from NSA prior to transfer of jurisdiction.

!!! example
    **NSA** -> **SU TWR**: "JST731, via ITIDE2W Arrival Runway 31, Number 1"  
    **SU TWR** -> **NSA**: "JST731, Number 1"  

!!! caution
    It is the responsibility of **SU TWR** to manage the sequence in to YBSU. This can be challenging, as it involves transitioning from **Radar** standards to **Procedural** standards. MNN/INL can greatly assist with this however, with use of Radar/ADSB tools, getting coordination done early, and ensuring any aircraft within **10 minutes** arrival time at YCFS, are assigned a *vertically separated level* at handoff to **CFS TWR**. For example:  
    **QLK123D** ETA CFS 0732, Number 1, A080  
    **BNZ456** ETA CFS 0736, Number 2, A090  
    **ABC** ETA CFS 0739, Number 3, A100  

### KPL / RK APP

The Standard assignable level from KPL to **RK APP** is `A070`, and assigned the ABVAS # or DADBO # STAR.

All other aircraft must be voice coordinated to **RK APP** prior to **20nm** from the boundary.

The Standard Assignable level from **RK APP** to KPL is `F150`, and tracking via BUDGI or TARES.
#### Airspace
When **RK APP** is online, KPL owns the Class C airspace outside 36 DME RK. **RK APP** owns the Class C airspace within the RK CTR SFC-F150, and is shown **shaded** in the image below
<figure markdown>
![Rockhampton TCU Airspace](img/RKAPP.png){ width="800" }
  <figcaption>Rockhampton TCU Airspace</figcaption>
</figure>

### INL / CFS TWR
#### Airspace
When **CFS TWR** is online, **INL** and **MNN** owns the Class C airspace from A045 upwards, and **CFS TWR** owns the Class D airspace SFC-A045.

#### Departures
Departures from YCFS in to INL Class C will be coordinated at taxi, and ready for departure. If a level other than the Standard Assignable is required from INL, they will coordinate this at the "Next" call.

!!! example
    **CFS TWR** -> **INL**: "Taxi, BNZ185 for YBSU via TUCAB"  
    **INL** -> **CFS TWR**: "BNZ185"  
    ...  
    **CFS TWR** -> **INL**: "Next, BNZ185"  
    **INL** -> **CFS TWR**: "BNZ185"  

The Standard Assignable level from **CFS TWR** to INL is the lower of `A070` or the `RFL`.

#### Arrivals
The Standard Assignable level from INL to **CFS TWR** is `A080`. Any aircraft that will not be assigned the Standard Assignable level must have that level concurred by **CFS TWR**.  
YCFS arrivals shall be coordinated to **CFS TWR** from INL prior to transfer of jurisdiction.

!!! example
    **INL** -> **CFS TWR**: "VET, via GAMBL, Number 1"  
    **CFS TWR** -> **INL**: "VET, Number 1"  

!!! caution
    It is the responsibility of **CFS TWR** to manage the sequence in to YCFS. This can be challenging, as it involves transitioning from **Radar** standards to **Procedural** standards. MNN/INL can greatly assist with this however, with use of Radar/ADSB tools, getting coordination done early, and ensuring any aircraft within **10 minutes** arrival time at YCFS, are assigned a *vertically separated level* at handoff to **CFS TWR**. For example:  
    **QLK123D** ETA CFS 0732, Number 1, A080  
    **BNZ456** ETA CFS 0736, Number 2, A090  
    **ABC** ETA CFS 0739, Number 3, A100  

### GOL/DOS/BUR / OK APP and AMB APP
#### Airspace
By default, **OK APP** owns the airspace within the **R654A-D** restricted areas, and **AMB APP** owns the airspace within the **R625A-D** restricted areas, unless stated otherwise by ad-hoc release or NOTAM.
#### Departures
Departures from YBOK and YAMB in to GOL/DOS/BUR Class C will be coordinated at taxi, and will be requesting a level.

!!! example
    **OK APP** -> **DOS**: "Taxi, VLAN48 for YBOK via MATVI, Requesting F140"  
    **DOS** -> **OK APP**: "VLAN48, F140"  
    **OK APP** -> **DOS**: "F140, VLAN48"  

#### Arrivals/Overfliers
All aircraft transiting from GOL/DOS/BUR to **OK APP** and **AMB APP** must be heads-up coordinated prior to **20nm** from the boundary. Operations within **OK APP** and **AMB APP** are fairly ad-hoc, so there are no standard assignable levels, simply whatever the GOL/DOS/BUR and **WLM APP** controller agree on.

!!! example
    **GOL** -> **AMB APP**: "via HUUGO, PUMA11, will be assigned A080"  
    **AMB APP** -> **GOL**: "PUMA11, A080"  

### INL/SDY/KPL / TSN(FLD/HWE) (Oceanic)
As per [Standard coordination procedures](../../../controller-skills/coordination/#enr-oceanic), Voice coordinate estimate and level prior to **15 mins** to boundary.