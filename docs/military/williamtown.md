---
  title: Williamtown TCU
---

--8<-- "includes/abbreviations.md"

## Positions

| Name               | Callsign       | Frequency        | Login Identifier              |
| ------------------ | -------------- | ---------------- | --------------------------------------|
| Williamtown Approach    | Williamtown Approach   | 135.700         | WLM_APP                                   |
| Williamtown ADC    | Williamtown Tower  | 118.300         | WLM_TWR        |
| Williamtown SMC    | Williamtown Ground  | 121.800         | WLM_GND        |
| Williamtown ACD    | Williamtown Delivery  | 130.350         | WLM_DEL       |
| Williamtown ATIS    | Williamtown ATIS  | 134.450         | YWLM_ATIS       |

## Airspace
### Default
By default, WLM APP owns all of the R578 Restricted Areas, detailed below:

- R578A (`A050`-`F125`)  
- R578B (`SFC`-`F125`)  
- R578C (`A045`-`F125`)  
- R578D (`A025`-`F125`)  
- R578E (`SFC`-`A100`)  
- R578F (`A045`-`A085`)  
- R578G (`A035`-`A085`)

#### Diagram
<figure markdown>
![Default WLM TCU Upper Limits](img/wlmapp.png){ width="700" }
  <figcaption>Default WLM TCU Upper Limits</figcaption>
</figure>

### Optional, as required
WLM APP can negotiate further airspace releases from surrounding ENR sectors of the following Restricted Areas:

- R574 (`SFC`-`F600`) (*See below)    
- R580 (`A045`-`F125`)  
- R583A (`SFC`-`F125`)  
- R583B (`SFC`-`A100`)  
- R587A (`F125`-`F600`)  
- R587B (`F125`-`F600`)  
- R596 (`SFC`-`F120`)
#### R574 Release
To put it bluntly, the R574 Restricted Area is quite large.

<figure markdown>
![R574 Restricted Area](img/r574.png){ width="700" }
  <figcaption>R574 Restricted Area</figcaption>
</figure>

It also occupies a lot of airspace that would commonly be used by YSSY arrivals and departures. If WLM APP is taking ownership of this airspace, it is good practice to negotiate an airspace release, whether that be a lateral or vertical portion of airspace (or a combination) to ARL(OCN) and TSN(HWE), to enable them to facilitate YSSY arrivals and departures with minimal impact.

### Classification
All airspace owned by WLM TCU when online is reclassified to **Class C**.

### Tower
When WLM ADC is online, the airspace below the R578A restricted area is owned by WLM ADC (`SFC`-`A050`), and is **Class C**.

<figure markdown>
![WLM ADC Airspace](img/wlmtwr.png){ width="700" }
  <figcaption>WLM ADC Airspace</figcaption>
</figure>

### Surveillance
WLM ADC is permitted to use Surveillance standards for separation. Surveillance coverage can be expected to be available at all levels in the WLM ADC airspace.  
For simulation purposes, visual separation is assumed to exist below the cloud base, and within 5nm of the aerodrome. Visual separation can still be used to separate from aircraft on an instrument approach, below the cloud base.

## Coordination
### WLM TCU / ARL(All)

#### Airspace
Due to the variable nature of the WLM TCU airspace, WLM APP shall coordinate to the relevant ENR exactly what airspace is being released, upon either ARL(All) or WLM APP logging on.

#### Departures
Due to the nature of WLM TCU operations, and the proximity to busy YSSY airspace, all departures shall be heads-up coordinated to ARL(All) prior to **10nm** from the boundary. Practically, this will need to be completed as soon as possible, ie, as soon as the aircraft becomes identified on departure.

!!! example
    <span class="coldline">**WLM TCU** -> **MNN**</span>: "via OMBUP, UTY1105, will be assigned F120"  
    <span class="coldline">**MNN** -> **WLM TCU**</span>: "UTY1105, F120"  
#### Arrivals/Overfliers
All aircraft transiting from CNK/MND/MNN to **WLM TCU** must be heads-up coordinated prior to **20nm** from the boundary. Operations within **WLM TCU** are fairly ad-hoc, so there are no standard assignable levels, simply whatever the CNK/MND/MNN and **WLM TCU** controller agree on.

!!! example
    <span class="coldline">**MNN** -> **WLM TCU**</span>: "via SANAD, JST458, will be assigned F130"  
    <span class="coldline">**WLM TCU** -> **MNN**</span>: "JST458, F130"  

!!! tip
    To keep it simple and safe, coordinate departures at the Highest Assignable level within your airspace (eg, with standard WLM TCU configuration, F120 to the East, A090 to the North West, A080 to the South West). You may coordinate other levels with ARL(All) if required for separation purposes.

### WLM TCU / WLM ADC
### Departures
A 'Next' call is made for all aircraft when they are next to depart. WLM ADC must inform WLM TCU if the aircraft does not depart within **2 minutes** of the next call.

!!! example
    <span class="hotline">**WLM ADC** -> **WLM TCU**</span>: "Next, JST471"  
    <span class="hotline">**WLM TCU** -> **WLM ADC**</span>: "JST471"

The Standard Assignable level from WLM ADC to WLM TCU is the lower of `A050` or the `RFL`, and assigned a SID. Any other aircraft must be heads-up coordinated in full.

!!! example
    <span class="hotline">**WLM ADC** -> **WLM TCU**</span>: "Next, DPOT27"  
    <span class="hotline">**WLM TCU** -> **WLM ADC**</span>: "DPOT27, A080"  
    <span class="hotline">**WLM ADC** -> **WLM TCU**</span>: "A080, DPOT27"

### Arrivals/Overfliers
WLM TCU must heads-up coordinate all arrivals and overfliers to WLM ADC prior to handoff. Practically, this needs to be done as soon as possible, ie, as soon as WLM TCU receives coordination on the aircraft.

!!! example
    <span class="hotline">**WLM TCU** -> **WLM ADC**</span>: "via WLM, ZULU, Close formation of 5, do you have any restrictions or requirements?”  
    <span class="hotline">**WLM ADC** -> **WLM TCU**</span>: "ZULU, no frequency requirements, A040"  

Aircraft with ADES YWLM shall be cleared for the approach prior to handoff.

!!! example
    <span class="hotline">**WLM TCU** -> **WLM ADC**</span>: "via BLAFF for the ILS RWY 12, VOZ1593”  
    <span class="hotline">**WLM ADC** -> **WLM TCU**</span>: "VOZ1593"  