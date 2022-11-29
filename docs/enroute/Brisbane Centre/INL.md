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

† *Non-standard positions* may only be used in accordance with [VATPAC Ratings and Controller Positions Policy](https://vatpac.org/publications/policies)

## Airspace

GOL is responsible for the [BN TCU](../../../terminal/brisbane) when **BN TCU** is offline.  
KPL is responsible for the [RK TCU](../../../terminal/coral) when **RKA** is offline.  
INL is responsible for **DOS**, **GOL**, **SDY**, **BUR**, **NSA**, and **KPL** when they are offline.  

When **SU ADC** is offline, SU CTR (Class D `SFC` to `A045`) reverts to Class G, and is administered by NSA and BUR. Alternatively, NSA may provide a [top-down procedural service](../../../aerodromes/sunshinecoast) if they wish (not recommended), and this must be coordinated to BUR.  
When **CFS ADC** is offline, CFS CTR (Class D `SFC` to `A045`) reverts to Class G, and is administered by MNN and INL. Alternatively, INL may provide a [top-down procedural service](../../../aerodromes/Coffs) if they wish (not recommended), and this must be coordinated to ARL(MNN).  

Whilst the **RKA** controller is expected to provide a [top-down service](../../../aerodromes/Rockhampton) to YBRK when **RK ADC** is offline, this is not expected of a GOL controller when both **RKA** and **RK ADC** are offline. If electing not to provide a top-down service to YBRK, the RK CTR Class D is reclassified to Class G `SFC` to `A007`, and Class E `A007` to `A045`.

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

### NSA / SU ADC
#### Airspace
When **SU ADC** is online, **NSA** owns the Class C airspace from `A045` upwards. **SU ADC** owns the Class D airspace `SFC` to `A045`.

#### Departures
Departures from YBSU in to NSA Class C will be coordinated when ready for departure.

!!! example
    <span class="hotline">**SU ADC** -> **NSA**</span>: "Next, BNZ123"  
    <span class="hotline">**NSA** -> **SU ADC**</span>: "BNZ123"  

The Standard Assignable level from **SU ADC** to NSA is the lower of `A050` or the `RFL`.

#### Arrivals
The Standard Assignable level from NSA to **SU ADC** is `A060`. Any aircraft that will not be assigned the Standard Assignable level must have that level concurred by **SU ADC**.  
NSA will ensure all YBSU arrivals have been assigned a STAR, unless the pilot is unable to accept one.  
YBSU arrivals shall be coordinated to **SU ADC** from NSA prior to transfer of jurisdiction.

!!! example
    <span class="coldline">**NSA** -> **SU ADC**</span>: "JST731, via ITIDE2W Arrival Runway 31"  
    <span class="coldline">**SU ADC** -> **NSA**</span>: "JST731"

#### Overfliers
Any aircraft that will enter SU ADC airspace, and not landing at YBSU, must be Heads-up coordinated prior to **5 mins** from the boundary.

!!! example
    **NSA** -> **SU ADC**: "via HOLIS, CXB"  
    **SU ADC** -> **NSA**: "CXB, A025"

### KPL / RKA

The Standard assignable level from KPL to **RKA** is `A070`, and assigned the ABVAS STAR or DADBO STAR.

All other aircraft must be voice coordinated to **RKA** prior to **20nm** from the boundary.

The Standard Assignable level from **RKA** to KPL is `F150`, and tracking via BUDGI or TARES.
### INL / CFS ADC
#### Airspace
When **CFS ADC** is online, **INL** and **MNN** owns the Class C airspace from `A045` upwards, and **CFS ADC** owns the Class D airspace `SFC` to `A045`.

#### Departures
Departures from YCFS in to INL Class C will be coordinated when ready for departure.

!!! example 
    <span class="hotline">**CFS ADC** -> **INL**</span>: "Next, BNZ185"  
    <span class="hotline">**INL** -> **CFS ADC**</span>: "BNZ185"  

The Standard Assignable level from **CFS ADC** to INL is the lower of `A070` or the `RFL`.

#### Arrivals
The Standard Assignable level from INL to **CFS ADC** is `A080`. Any aircraft that will not be assigned the Standard Assignable level must have that level concurred by **CFS ADC**.  
YCFS arrivals shall be coordinated to **CFS ADC** from INL prior to transfer of jurisdiction.

!!! example
    <span class="hotline">**INL** -> **CFS ADC**</span>: "VET, via GAMBL"  
    <span class="hotline">**CFS ADC** -> **INL**</span>: "VET"  

#### Overfliers
Any aircraft that will enter CFS ADC airspace, and not landing at YCFS, must be Heads-up coordinated prior to **5 mins** from the boundary.

!!! example
    **INL** -> **CFS ADC**: "via CFS, XFC"  
    **CFS ADC** -> **INL**: "XFC, A040"

### GOL/DOS/BUR / OK TCU and AMB TCU
#### Airspace
By default, **OK TCU** owns the airspace within the **R654A-D** restricted areas, and **AMB TCU** owns the airspace within the **R625A-D** restricted areas, unless stated otherwise by ad-hoc release or NOTAM.

#### Departures
Departures from YBOK and YAMB in to GOL/DOS/BUR Class C will be coordinated at taxi, and will be requesting a level.

!!! example
    <span class="coldline">**OK TCU** -> **DOS**</span>: "Taxi, VLAN48 for YBOK via MATVI, Requesting F140"  
    <span class="coldline">**DOS** -> **OK TCU**</span>: "VLAN48, F140"  
    <span class="coldline">**OK TCU** -> **DOS**</span>: "F140, VLAN48"  

#### Arrivals/Overfliers
All aircraft transiting from GOL/DOS/BUR to **OK TCU** and **AMB TCU** must be heads-up coordinated prior to **20nm** from the boundary. Operations within **OK TCU** and **AMB TCU** are fairly ad-hoc, so there are no standard assignable levels, simply whatever the GOL/DOS/BUR and **WLM TCU** controller agree on.

!!! example
    <span class="hotline">**GOL** -> **AMB TCU**</span>: "via HUUGO, PUMA11, will be assigned A080"  
    <span class="hotline">**AMB TCU** -> **GOL**</span>: "PUMA11, A080"  

### INL/SDY/KPL / TSN(FLD/HWE) (Oceanic)
As per [Standard coordination procedures](../../../controller-skills/coordination/#enr-oceanic), Voice coordinate estimate and level prior to **15 mins** to boundary.