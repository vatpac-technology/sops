---
title: Runway Management
---

--8<-- "includes/abbreviations.md"

## Duty Runways
Careful selection of the duty runway at an aerodrome is important to ensure safe, expeditious traffic flow. When considering runway configuration, be mindful of the following operational considerations:
<ol>
    <li>Wind direction and speed</li>
    <li>SOP-dictated preferred runway modes</li>
    <li>Traffic flow and efficiency</li>
</ol>

### Wind
Where possible, select the most into wind runway/s. Your chosen runway configuration should have:

|  | Crosswind | Tailwind |
| ---- | ---- | ---- |
| Dry Runway | Max 20kt | Max 5kt |
| Wet Runway | Max 20kt | None |

!!! tip
    It is good practice to review the TAF when selecting a runway configuration, so that you are aware of any predicted wind shifts and can plan accordingly.

### Preferred Runway Modes
Most major aerodrome SOP pages include guidance on preferred runway modes, which cater for traffic levels, common approach types, and airspace restrictions. After considering the prevailing winds, have a look at the appropriate SOP page to determine whether a preferred runway mode exists for the current meteorological conditions.

!!! example
    The [Sydney Aerodrome SOPs](../aerodromes/sydney.md#runway-modes) dictate that the preferred runway mode is SODROPS (runway 34L for arrivals, runway 16L for departures), however a note below indicates the reduced capacity achievable with this mode and recommends PROPS where traffic levels are expected to be high.

### Traffic Flow
Where the published SOPs don't include guidance on preferred runway modes, or the situation you are faced with differs from those catered for by the SOPs, consider how you can maximise runway efficiency to handle the current traffic scenario. Remember to be mindful of the impact of the current wind & weather conditions, and any operational pressure the chosen configuration might have on any surrounding controllers.

## Approach Types
The controller in charge of the ATIS must nominate an approach expectation to allow pilots to prepare themselves and their aircraft as required. Since this decision largely affects the TMA controller, it is a good idea to discuss this with them.

Visual approaches should be nominated on the ATIS when the current meteorological conditions (cloud base and visibility) allow for them. You may nominate visual approaches when:

- There are no clouds within 500ft of the MSA (as found on any DAP chart), and
- The visibility is greater than 5000m

<figure markdown>
![Visual Approach Cloud Base](img/approachtypevsa.png){ width="600" }
  <figcaption>Visual Approach Cloud Base</figcaption>
</figure>

If the cloud base or visibility does not allow for visual approaches, an instrument approach should be nominated on the ATIS. Some SOPs will dictate local procedures regarding particular instrument approach procedures which should be included on the ATIS. If in doubt, include `EIA` (Expect Instrument Approach) in the ATIS.

!!! tip
    See [ATIS Abbreviations](./atis.md) for a full list of abbreviations which can be used in the ATIS.

## Runway Changes
Whilst runway changes have a minimal impact on aerodrome controllers, they can drastically increase the workload for TMA controllers and have large flow on effects for enroute controllers. All runway changes should (where possible) be carefully planned and communicated, to ensure all surrounding sectors are aware of the impending change.

!!! important
    Runway changes involve all types of controllers (from Delivery to Enroute), so a large amount of coordination is required. All coordination should be done on a **point-to-point** basis, so remember to pass on any relevant details to any controllers above/around you as necessary.

    E.g. ADC talks to TMA, then TMA talks to ENR, then ENR talks to any subsectors/surrounding sectors as required.

### Planned Configuration Change
The aerodrome controller in charge of the ATIS should frequently check the METAR/TAF to identify trends and any anticipated wind shifts. If a change of runway is expected (e.g. with the forecast passing of a front), controllers should anticipate this change.

Discuss the event with the overlying TMA controller/s and nominate a time from which the new runway configuration will be used. It can be helpful to identify the last arrival who will use the current runway mode, so that both Tower and Approach have a definite change point. Once this coordination has been completed, update the ATIS and include an expectation of a runway change in the `OPR INFO` field. This should include the expected time of change and the new runway mode to be used.

!!! example
    <span class="hotline">**SY ADC** -> **SAN**</span>: "The tailwind component is starting to increase a bit and TAF indicates the wind's going to keep swinging around. Thoughts on changing to runway 34s from time 30?"  
    <span class="hotline">**SAN** -> **SY ADC**</span>: "There's a gap in the sequence in about 20 minutes, lets make it time 45. Last arrival in the runway 16 direction will be QFA553."  
    <span class="hotline">**SY ADC** -> **SAN**</span>: "Copy, changing to 34s at time 45, last arrival runway 16s QFA553."

    **ATIS**: `FM TIME 0445 EXP RWY 34L AND R FOR ARRS AND DEPS`

Once QFA553 lands, the runway change can occur. It is good practice to cancel autorelease during this period, to avoid any surprise departures.

### Immediate Change
Sometimes, prior notice is not available to plan a runway change and an immediate change is required. **Changes of this nature will have a severe impact on surrounding controllers if the traffic levels are high, and should be avoided at all costs.**

If an immediate change is required, the first port of call should be to contact the TMA controller and advise of the situation. Nominate the last aircraft to land using the current runway mode and hold all departures until the runway change has occurred. It is good practice to cancel autorelease during this period, to avoid any surprise departures as the TMA controller sequences any remaining aircraft for the new runway.

## Runway Separation Standards
### Takeoff Clearances
A takeoff clearance must not be issued until:

- a landing aircraft has taxied clear of the runway
- a preceeding departing aircraft is airborne and either:
    - commenced a turn, or
    - passed the upwind end of the runway, or
    - reached a point at least 1,800m along the runway
- an aircraft operating on a crossing runway has passed through the intersection

<figure markdown>
![Departure Runway Separation](img/rwysepdep.jpg){ width="500" }
  <figcaption>Departure Runway Separation</figcaption>
</figure>

### Landing Clearances
A landing clearance must not be issued until:

- a preceeding landing aircraft has taxied clear of the runway
- a departing aircraft is airborne and:
    - commenced a turn, or
    - passed the point on the runway where the arriving aircraft is expected to complete its landing roll, and there is sufficient distance to enable the landing aircraft to manoeuvre in the event of a go around

<figure markdown>
![Arrival Runway Separation](img/rwyseparr.jpg){ width="500" }
  <figcaption>Arrival Runway Separation</figcaption>
</figure>

### Wake Turbulence
Whilst wake turbulence is often not considered in the virtual world, some advanced flight simulators are developing wake turbulence models to apply between successive departures. As a result, Tower controllers should provide the following time-based separation between successive departures:

<table>
    <thead>
        <tr>
            <th>Lead Aircraft</th>
            <th>Following Aircraft</th>
            <th>Time (min)</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td rowspan="3" style="vertical-align: middle;">Super</td>
            <td>Heavy</td>
            <td>2</td>
        </tr>
        <tr>
            <td>Medium</td>
            <td>3</td>
        </tr>
        <tr>
            <td>Light</td>
            <td>3</td>
        </tr>
        <tr>
            <td rowspan="2" style="vertical-align: middle;">Heavy</td>
            <td>Medium</td>
            <td>2</td>
        </tr>
        <tr>
            <td>Light</td>
            <td>2</td>
        </tr>
        <tr>
            <td>Medium</td>
            <td>Light</td>
            <td>2</td>
        </tr>
    </tbody>
</table>

!!! tip
    Wake is only generated from the moment of rotation during the takeoff roll, to the moment of touchdown on landing. As a result, timing should commence when the lead aircraft rotates (or is visibily airborne when using vatSys), and no wake turbulence separation is required between an arrival and a departure.

## Helicopter Operations
There is often confusion about how to handle helicopter operations at a controlled aerodrome. In reality, their operation is quite simple and no different to fixed wing aircraft.

### Runways & Manoeuvring Area
The aerodrome controllers 'own' the pavement on all runways and any taxiways or other areas defined as the 'manoeuvring area'. Aircraft require explicit takeoff and landing clearances to operate from these areas.

!!! example
    **SY ADC**: "RSCU209, runway 16L, cleared to land"

    **AD ADC**: "YOE, taxiway A2, cleared for takeoff"

### Other Locations
Areas outside of the manoeuvring area are beyond the jurisdiction of the aerodrome controllers. However, since these aerodromes exist in a CTR (with controlled airspace down to the surface), a clearance is required to operate in the airspace itself. ATC is not able to issue explicit takeoff and landing clearances (as they don't own the ground on which the aircraft wishes to takeoff/land), so issue a requirement to report airborne or on the ground.

!!! example
    **SY ADC**: "HSZ, hotel 6, report on the ground"  

    **SY ADC**: "HWD, report airborne"