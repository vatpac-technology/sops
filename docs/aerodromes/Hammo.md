---
  title: Hamilton Island (YBHM)
---

--8<-- "includes/abbreviations.md"

## Positions

| Name | Callsign | Frequency | Login Identifier |
| ---- | -------- | --------- | ---------------- |
| Hamilton Island ADC | Hamilton Tower | 118.700 | HM_TWR |
| Hamilton Island ATIS | N/A | 128.350 | YBHM_ATIS |

## Airspace

<figure markdown>
![YBHM Airspace](img/ybhm_airspace.png){ width="700" }
  <figcaption>YBHM Airspace</figcaption>
</figure>

## Surveillance
HM TWR is permitted to use Surveillance standards for separation. Surveillance coverage can be expected to be not available below **3100 feet** in the HM CTR.  
For simulation purposes, visual separation is assumed to exist below the cloud base, and within 5nm. Visual separation can still be used to separate from aircraft on an instrument approach, below the cloud base.
## Instrument Approaches
Only one aircraft is permitted to conduct an instrument approach at any time, due to limited surveillance coverage. HM TWR must ensure that all aircraft are procedurally separated from any portion of an instrument approach and missed approach that is conducted below **3100 feet**.  

If required, HM TWR can pass amended tracking/level instructions to an aircraft for a missed approach for separation purposes, as long as the aircraft can be issued **uninterrupted climb** to the LSALT/MSA once identified.
## Coordination
### HM ADC / ENR

#### Taxi Call
A taxi call shall be made between HM TWR and BN CTR as an aircraft is given taxi clearance. Center will respond by acknowledging the callsign and activating FDR.

!!! example
    **HM_TWR** -> **BN-SWY_CTR**: "Taxis QFA797 for YBBN via OVRON"  
    **BN-SWY_CTR** -> **HM_TWR**: "QFA797"  

#### Next Call
A next call is made for all aircraft when they are next to depart and will be departing within two minutes. Center will respond by either acknowledging the callsign or offering a higher level. Any higher level issued will be passed along in the takeoff clearance. If the controller is in a high workload environment, a next call may be omitted, in favour of taxi and departure coordination.

!!! example
    **HM_TWR** -> **BN-SWY_CTR**: "Next QFA797"  
    **BN-SWY_CTR** -> **HM_TWR**: "QFA797"    

#### Departure Call
A departure call should be made as the aircraft becomes airborne. If not already issued, CTR will issue a higher level. The aircraft should be transferred to CTR as they climb through the upper level of the HM class D airspace.

!!! example
    **HM_TWR** -> **BN-SWY_CTR**: "Departure QFA797 at 06"  
    **BN-SWY_CTR** -> **HM_TWR**: "QFA797, FL360"
    **HM_TWR** -> **BN-SWY_CTR**: "FL360, QFA797" 
#### Arrival Coordination
BN-SWY_CTR will coordinate all arrivals into Hamilton Island Prior to handing over to tower in the following format:

- Callsign & Aircraft Type
- Estimate
- Inbound Radial/Procedure
- Assigned Level
- Sequence Number (if applicable)

!!! example
    **BN-SWY_CTR** -> **HM_TWR**: "JST734, A320, estimates Hamilton Island 52, 189 radial, 5000ft, number 2”
    **HM_TWR** -> **BN-SWY_CTR**: "JST734"

## Standard Assignable Levels

Aircraft departing from Hamilton Island shall be assigned `A050` or `RFL` if lower.

Aircraft arriving into Hamilton Island shall be assigned `A060`.