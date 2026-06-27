---
title: Class D Tower
---

--8<-- "includes/abbreviations.md"

## Introduction
- TODO: advice on which separation standards to lean on
- During inbound coordination, pre-plan separation standard to use or provide sequencing instructions
- Include recommended standard for stream of arrivals, stream of departures, traffic mix

## Airspace
Remember that in [Class D Airspace](../../controller-skills/classofairspace), IFR aircraft are separated from IFR and SVFR, and SVFR is separated from SVFR when visibility is not VMC. **No separation** is provided for VFR aircraft, even though it is controlled airspace. The Tower Controller provides more of a *"segregation"* service (ie, providing reasonable opportunity for the aircraft to separate themselves), as well as providing traffic information.

<figure markdown>
![Class D Tower Airspace Diagram](img/classDtwrdiagram.png){ width="800" }
  <figcaption>Class D Tower Airspace Diagram</figcaption>
</figure>

## Surveillance
Although surveillance standards cannot be used for separation at Class D Towers, overlying TCU/Enroute controllers can use their surveillance standards to help Class D towers achieve separation, when procedural separation is a bit awkward or impractical.

!!! phraseology
    <span class="hotline">**AY ADC** -> **BLA**</span>: "Can you advise when QLK208D is 5nm clear of DSB?"  
    <span class="hotline">**BLA** -> **AY ADC**</span>: "Affirm, will do"  
    ...  
    <span class="hotline">**BLA** -> **AY ADC**</span>: "QLK208D, 5nm clear of DSB"  
    <span class="hotline">**AY ADC** -> **BLA**</span>: "QLK208D, 5nm clear of DSB, thanks"

## Lateral
### 45° Segregated Flight Paths
#### Straight-in
- Can be applied between departures and arrivals when the departing aircraft's flight path and the arrival aircraft's flight path are at least 45° clear of each other, and, for a straight-in approach, the arriving aircraft is at least **5nm** from the arrival runway threshold

<figure markdown>
![Segregated Flight Paths - Straight-in (Prior to 5nm)](img/45segregatedfpsi1.png){ width="700" }
  <figcaption>Segregated Flight Paths - Straight-in (Prior to 5nm)</figcaption>
</figure>

<figure markdown>
![Segregated Flight Paths - Straight-in (After 5nm)](img/45segregatedfpsi2.png){ width="700" }
  <figcaption>Segregated Flight Paths - Straight-in (After 5nm)</figcaption>
</figure>

#### Visual, DME/GNSS, Circle to land
- Can be applied between departures and arrivals when the departing aircraft's flight path and the arrival aircraft's flight path are at least 45° clear of each other, and, for a Visual, DME/GNSS or Circle to land approach, the arriving aircraft is at least **10nm** from the airfield

<figure markdown>
![Segregated Flight Paths - Visual, DME/GNSS, Circle to land (Prior to 10nm)](img/45segregatedfpcircle1.png){ width="700" }
  <figcaption>Segregated Flight Paths - Visual, DME/GNSS, Circle to land (Prior to 10nm)</figcaption>
</figure>

<figure markdown>
![Segregated Flight Paths - Visual, DME/GNSS, Circle to land (After 10nm)](img/45segregatedfpcircle2.png){ width="700" }
  <figcaption>Segregated Flight Paths - Visual, DME/GNSS, Circle to land (After 10nm)</figcaption>
</figure>

### Conflict Area
Two aircraft are considered to be in lateral conflict when they are within the relevant *Circular Error of Position* (CEP) distance of each other. The *Conflict Area tool* can help identify the region in which the aircraft lose lateral separation assurance along their cleared routes.

The CEP is dependent on an aircraft's navigation capability, which is described in their flight plan remarks by the `NAV/xxx` descriptor.

#### NAVCAPs
All aircraft have a NAVCAP, associated with a ***Circular Error of Position***. This helps determine which number to select when using the Conflict Area Tool:

| NAVCAP Code | Meaning | Circular Error of Position (CEP) |
| ---- | ----------- | -------- |
| A | All | 7nm |
| 2 | RNP2 | 7nm |
| 4 | RNP4 | 14nm |
| 5 | RNAV5 | 14nm |
| T | RNAV10 | 14nm |
| Z | None | 30nm |

The minimum number you must select when using the tool, is equal to: **Aircraft 1 CEP + Aircraft 2 CEP + 1nm**

!!! example
    Aircraft 1 NAVCAP: 4  
    Aircraft 2 NAVCAP: Z  
    14+30+1=**45**  

!!! example
    Aircraft 1 NAVCAP: 2  
    Aircraft 2 NAVCAP: A  
    7+7+1=**15**  

!!! tip
    The best scenario is to have 2 aircraft that are RNP2 approved. "Feed the beast" in order to get what you want, that is to say "QFA12, confirm you are RNP2 approved?", and they'll probably say yes. Enter `NAV/RNP2` in the flight plan remarks, and you can use a 7nm CEP.

#### Separation
With each CEP calculated and the conflict area determined, controllers must ensure another separation standard is in place before the aircraft enter the conflict area.

## Departures
### 2 min
| Conditions | |
| ------------- | ------------------ |
| a) The aircraft are climbing to vertically separated levels;<br>b) Both aircraft report reaching the cruising level;<br>c) If the following aircraft is climbing to a lower level than the preceding aircraft, and reaches that level first, apply another form of separation immediately; and<br>d) climb and cruising IAS of the following aircraft is at least **10 kt slower** and not more than **90%** of the climb and cruising IAS or Mach number of the leading aircraft. | <figure markdown>
![2 min Departure Standard Diagram](img/dep2min.png){ width="600" }
</figure> |

### 5 min
| Conditions | |
| ------------- | ------------------ |
| a) Both aircraft report reaching the cruising level;<br>b) If the following aircraft reaches that level first, apply another form of separation immediately; and<br>c) climb and cruising IAS of the following aircraft is at least **10 kt slower** and not more than **90%** of the climb and cruising IAS or Mach number of the leading aircraft. | <figure markdown>
![5 min Departure Standard Diagram](img/dep5min.png){ width="600" }
</figure> |

### 10 min
| Conditions | |
| ------------- | ------------------ |
| a) Both aircraft report reaching the cruising level;<br>b) If the following aircraft reaches cruising level first, apply another form of separation immediately; and<br>c) climb IAS of the following aircraft is less than or equal to the climb IAS of the leading aircraft. | <figure markdown>
![10 min Departure Standard Diagram](img/dep10min.png){ width="600" }
</figure> |

## Arrivals
### 10nm
| Conditions | |
| ------------- | ------------------ |
| a) Both aircraft are **inbound**, and the leading aircraft is within **20nm** of a controlled aerodrome; and<br>b) The aircraft are assigned vertically separated levels. | <figure markdown>
![10nm Arrival Standard Diagram](img/arr10nm.png){ width="600" }
</figure> |

### Visually Acquired Aircraft
Two aircraft may be considered to be separated if the second aircraft is beyond the view of the controller (i.e. greater than 10nm from the aerodrome), provided:

- the first aircraft has been sighted by the tower controller, and
- a landing/missed approach can be effected clear of conflict

In practice, this allows controllers to reduce the spacing between successive arrivals via an instrument approach provided the weather conditions will allow the controller to visually acquire each aircraft within 10nm of the aerodrome and before the following aircraft commences the approach.

TODO: Create diagram

## Vertical
### 1000ft
- Between any aircraft

## See Also
- [Visual Separation](../visual)  
- [Procedural Separation](../procedural)

