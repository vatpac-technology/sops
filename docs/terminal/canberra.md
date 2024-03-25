---
  title: Canberra TCU
---

--8<-- "includes/abbreviations.md"

## Positions

| Name               | ID      | Callsign       | Frequency        | Login Identifier              |
| ------------------ | --------------| -------------- | ---------------- | --------------------------------------|
| **Canberra Approach East**    |**CBE**| **Canberra Approach**   | **124.500**         | **CB_APP**     |
| Canberra Approach West†   |CBW| Canberra Approach   | 125.900          | CB-W_APP    |
| Canberra Flow†        |CBF|                |          | CB_FMP                              |

† *Non-standard positions* may only be used in accordance with [VATPAC Air Traffic Services Policy](https://vatpac.org/publications/policies)

## Airspace
The Vertical limits of the CB TCU are `SFC` to `F245`.

### Airspace Division

<figure markdown>
![CB TCU Structure](img/cbtcu_annotated.png){ width="700" }
  <figcaption>CB TCU Structure</figcaption>
</figure>

## Coordination
### Enroute
#### Departures
Voiceless coordination is in place from CB TCU to ENR for aircraft assigned the lower of `F240` or the `RFL`, and tracking via a Procedural SID terminus.

Any aircraft not meeting the above criteria must be prior coordinated to ENR.

!!! example
    <span class="hotline">**CB TCU** -> **GUN**</span>: "EVY113, with your concurrence, will be assigned F180, for my separation with QLK165D"  
    <span class="hotline">**GUN** -> **CB TCU**</span>: "EVY113, concur F180"  

#### Arrivals
The Standard assignable level from ENR to CB TCU is `F130`. All other levels must be prior coordinated

### ADC
#### Airspace
CB ADC is responsible for the Class C Airspace within the CB CTR `SFC` to `A035`.

#### Auto Release
'Next' coordination is **not** required from CB ADC for aircraft that are:   
  a) Departing from a runway nominated on the ATIS; and  
  b) Assigned the standard assignable level; and  
  c) Assigned a **Procedural** SID

!!! example
    <span class="hotline">**CB ADC** -> **CB TCU**</span>: "Next, ABC, runway 35"  
    <span class="hotline">**CB TCU** -> **CB ADC**</span>: "ABC, Track Extended Centreline, unrestricted"  
    <span class="hotline">**CB ADC** -> **CB TCU**</span>: "Track Extended Centreline, ABC"

The Standard Assignable level from CB ADC to CB TCU is:  
For IFR aircraft: `A100`  
For VFR aircraft: The lower of `A040` or the `RFL`

#### Helipads in the CB CTR
The Canberra CTR contains the Southcare Helicopter Base (YXSB) as well as two hospitals (Calvary Hospital and Canberra Hospital). Helicopters inbound to these helipads should be coordinated with **CB ADC** who can use a visual separation techniques as required. ADC and the TMA controller should work together to determine the most appropriate clearance limit (if required due traffic) for the helicopter, before frequency transfer is issued. ADC will issue a visual approach clearance when it is available.

!!! example
    *RSCU201 is an IFR AW139 helicopter tracking from the east for Southcare Base (YXSB).*  
    <span class="hotline">**CBE** -> **CB ADC**</span>: "To the east, RSCU201, for Southcare Base, are you able to separate with the arrival path to runway 35?"  
    <span class="hotline">**CB ADC** -> **CBE**</span>: "Affirm, RSCU201 clearance limit Queanbeyan"  
    <span class="hotline">**CBE** -> **CB ADC**</span>: "Clearance limit Queanbeyan, RSCU201"  

    **CBE**: "RSCU201, clearance limit Queanbeyan, contact Tower 118.7"

Departing helicopters may transit the CTR to Class G (under the direction of ADC) or be coordinated with the TCU to determine the availability of an airways clearance in CTA.

### CB TCU Internal
All aircraft transiting between internal CB TCU boundaries must be heads-up coordinated.

!!! example
    <span class="hotline">**CBW** -> **CBE**</span>: "via CB, FD123"  
    <span class="hotline">**CBE** -> **CBW**</span>: "FD123, A090"   

Boundary coordination is not required between CBW and CBE for aircraft arriving or departing tracking via the 17/35 extended centreline.