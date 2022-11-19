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

When **AS ADC** is offline, AS CTR (Class D and C `SFC` to `F125`) within 80 DME AS reverts to Class G, and AS CTR (Class C `F125` to `F245`) within 80 DME AS reverts to Class E, and both are administered by ASP. Alternatively, ASP may provide a [top-down procedural service](../../../aerodromes/Alice) if they wish.

<figure markdown>
![Alice Springs Airspace](../assets/ASPENR.png){ width="700" }
  <figcaption>Alice Springs Airspace</figcaption>
</figure>

## Extending
As per [VATPAC Ratings and Controller Positions Policy](https://cdn.vatpac.org/documents/policy/Controller+Positions+and+Ratings+Policy+v5.2.pdf), ML-ASP_CTR is only permitted to extend to adjacent **YMMM** sectors.

## Coordination
### ASP (All) / ENR

As per [Standard coordination procedures](../../../controller-skills/coordination/#enr-enr), Voiceless, no changes to route or CFL within **20nm** to boundary.

### ASP/ASW/WAR/FOR/WRA/BKE/ESP Internal

As per [Standard coordination procedures](../../../controller-skills/coordination/#enr-enr), Voiceless, no changes to route or CFL within **20nm** to boundary.

### ASP / AS ADC

#### Taxi Call
A taxi call shall be made between **AS ADC** and ASP as an aircraft is given taxi clearance. ASP will respond by acknowledging the callsign and activating FDR.

!!! example
    **AS ADC** -> **ASP**: "Taxis QFA797 for YMML via ELLOW3 departure"  
    **ASP** -> **AS ADC**: "QFA797"  

#### Next Call
A next call is made for all aircraft when they are next to depart and will be departing within two minutes. ASP will respond by either acknowledging the callsign or offering a higher level. Any higher level issued will be passed along in the takeoff clearance. If the controller is in a high workload environment, a next call may be omitted, in favour of taxi and departure coordination.

!!! example
    **AS ADC** -> **ASP**: "Next QFA797"  
    **ASP** -> **ASP**: "QFA797"    

#### Departure Call
A departure call should be made as the aircraft becomes airborne. The aircraft should be transferred to ASP as they climb through the upper level of the AS CTR class D airspace.

!!! example
    **AS ADC** -> **ASP**: "Departure QFA797 at 06"  
    **ASP** -> **AS ADC**: "QFA797"

#### Arrival Coordination

**ASP** will coordinate the sequence to **AS ADC**

!!! example
    **ASP** -> **AS ADC**: "New Sequence of 2. Via SADEL, QFA1956, Number 1. Via HERMA, FD867, Number 2”  
    **AS ADC** -> **ASP**: "QFA1956, Number 1. FD867, Number 2"  

#### Standard Assignable Levels

The Standard assignable level from ASP to **AS ADC** is `A080`.  

The Standard assignable level from **AS ADC** to ASP is the lower of `A070` or the `RFL`.  

### WRA / WR ADC

Reserved.