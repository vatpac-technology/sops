---
  title: Alice Springs (ASP)
---

--8<-- "includes/abbreviations.md"
## Positions

| Name | Callsign | Frequency | Login ID |
| ---- | -------- | --------- | -------- |
| **Alice Springs** | **Melbourne Centre** | **128.850** | **ML-ASP_CTR** |
| Alice Springs West† | Melbourne Centre | 131.800 | ML-ASW_CTR |
| Warburton† | Melbourne Centre | 124.900 | ML-WAR_CTR |
| Forest† | Melbourne Centre | 132.700 | ML-FOR_CTR |
| Woomera† | Melbourne Centre | 132.900 | ML-WRA_CTR |
| Bourke† | Melbourne Centre | 128.200 | ML-BKE_CTR |
| Esperance† | Melbourne Centre | 123.950 | ML-ESP_CTR |

† *Non-standard positions* may only be used in accordance with [VATPAC Ratings and Controller Positions Policy](https://vatpac.org/publications/policies)

## Airspace

<figure markdown>
![Alice Springs Airspace](../assets/asp.png){ width="700" }
  <figcaption>Alice Springs Airspace</figcaption>
</figure>

**AS ADC** is responsible for the Class D airspace `SFC` to `A045`, as well as the Class C airspace `A045` to `A065`, within the AS CTR.

### Reclassifications

When **AS ADC** is offline, AS CTR (Class D and C `SFC` to `F125`) within 80 DME AS reverts to Class G, and AS CTR (Class C `F125` to `F245`) within 80 DME AS reverts to Class E, and both are administered by ASP. Alternatively, ASP may provide a [top-down procedural service](../../../aerodromes/Alice) if they wish.

## Extending
!!! Warning
    As per [VATPAC Ratings and Controller Positions Policy](https://cdn.vatpac.org/documents/policy/Controller+Positions+and+Ratings+Policy+v5.2.pdf), ML-ASP_CTR is only permitted to extend to adjacent **YMMM** sectors.

## STAR Clearance Expectation
### Handoff
Aircraft being transferred to the following sectors shall be told to Expect STAR Clearance on handoff:

| Transferring Sector | Receiving Sector | ADES | Notes |
| ---- | -------- | --------- | --------- |
| FOR, WRA, BKE | TBD(AUG) | YPAD, YPED | Jets only |
| BKE | TBD | YPAD, YPED | |
| ESP | PIY(HYD) | YPPH, YPEA | Jets only |
| BKE | YWE(KAT) | YSSY | |

## Coordination
### Enroute
As per [Standard coordination procedures](../../../controller-skills/coordination/#enr-enr), Voiceless, no changes to route or CFL within **50nm** to boundary.

### ASP Internal
As per [Standard coordination procedures](../../../controller-skills/coordination/#enr-enr), Voiceless, no changes to route or CFL within **50nm** to boundary.

### AS ADC
#### Departures
Departures from YBAS in to ASP Class C will be coordinated when ready for departure.

!!! example
    <span class="hotline">**AS ADC** -> **ASP**</span>: "Next, QFA797"  
    <span class="hotline">**ASP** -> **AS ADC**</span>: "QFA797, Unrestricted"  
    <span class="hotline">**AS ADC** -> **ASP**</span>: "Unrestricted, QFA797"  

The Standard Assignable level from **AS ADC** to ASP is the lower of `A070` or the `RFL`, any other level must be prior coordinated.
#### Arrivals
YBAS arrivals shall be heads-up coordinated to **AS ADC** from ASP prior to **5 mins** from the boundary.

!!! example
    <span class="hotline">**ASP** -> **AS ADC**</span>: "Via SADEL, QFA1956”  
    <span class="hotline">**AS ADC** -> **ASP**</span>: "QFA1956"  

The Standard Assignable level from ASP to **AS ADC** is `A080`, any other level must be prior coordinated.

#### Overfliers
Any aircraft that will enter AS ADC airspace, and not landing at YBAS, must be Heads-up coordinated prior to **5 mins** from the boundary.

!!! example
    <span class="hotline">**ASP** -> **AS ADC**</span>: "via AS, JDS"  
    <span class="hotline">**AS ADC** -> **ASP**</span>: "JDS, A060"

### WR ADC

Departures from YPWR in to WRA CTA will be coordinated when ready for departure.

!!! example
    <span class="hotline">**WR ADC** -> **WRA**</span>: "Next, ASY404"  
    <span class="hotline">**WRA** -> **WR ADC**</span>: "ASY404, Unrestricted"  
    <span class="hotline">**WR ADC** -> **WRA**</span>: "Unrestricted, ASY404" 

The Standard Assignable level from **WR ADC** to WRA is the lower of `F130` or the `RFL`, any other level must be prior coordinated.

#### Arrivals/Overfliers
YPWR arrivals shall be heads-up coordinated to **WR ADC** from WRA prior to **5 mins** from the boundary.

!!! example
    <span class="hotline">**WRA** -> **WR ADC**</span>: "Via WR, ASY219”  
    <span class="hotline">**WR ADC** -> **WRA**</span>: "ASY219"  

The Standard Assignable level from ASP to **WR ADC** is `F120`, any other level must be prior coordinated.

### IND(INS) (Oceanic)
As per [Standard Coordination Procedures](../../../controller-skills/coordination/#enr-oceanic), Heads-up coordinate prior to **15 mins** to boundary.