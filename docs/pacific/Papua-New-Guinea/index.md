---
  title: Local Instructions
---

--8<-- "includes/abbreviations.md"

## Altimetry
### Transition Altitude 
Within the Papua New Guinea FIR, the transition altitude is 20,000 ft (`A200`).

### Transition Level
Within the Papua New Guinea FIR, the transition level is `F210`.


## Classes of Airspace
The airspace classification structure within the AYPM FIR differs from other VATPAC regions, most notably the use of Class F airspace for uncontrolled airspace. `PNG AIP ENR 1.4`

| Class | Flight Rules | Separation provided | Service Provided | Airspace Speed Limitation | Radio Communication Requirements | Subject to ATC Clearance |
| ----------- | ----------------- | ------- | ----------- | ----------------- | ------- | ----------- |
| **A** | IFR | All aircraft | ATC Service | N/A | Continuous two-way | **Yes** |
| | VFR not permitted | | |  |  | |
| **C** | IFR | IFR from IFR,<br>IFR from VFR,<br>IFR from SVFR | ATC Service | N/A | Continuous two-way | **Yes** |
| | VFR | VFR from IFR | ATC service for separation from IFR,<br>VFR/VFR Traffic Info (and traffic avoidance advice on request) | **250KT IAS** below **10,000FT AMSL** | Continuous two-way | **Yes** |
| **D** | | _Not used within the AYPM FIR._
| **E** | | _Not used within the AYPM FIR._
| **F** | IFR | Nil | FIS<br>IFR/IFR Traffic info,<br>IFR/VFR Traffic info |  **250KT IAS** below **10,000FT AMSL** | Continuous two-way | No |
| | VFR | Nil | FIS<br>VFR/VFR Traffic info on request | As Above | Continuous two-way | No |
| **G** | | _Not used within the AYPM FIR._

### Class F operations
Class F airspace is uncontrolled airspace. While aircraft operating in Class F airspace are not subject to ATC clearance, all aircraft (both IFR and VFR) are required to maintain continuous two-way communication.

This means that when departing from an uncontrolled aerodrome, both IFR and VFR aircraft are required to provide departure reports to ATC.

!!! phraseology
	*NTZ is a VFR aircraft which has departed from AYKV.*  
    **NTZ**: "Moresby Control, NTZ with departure."  
    **AYPM**: "NTZ, Moresby Control."  
    **NTZ**: "Moresby Control, NTZ departed AYKV time 20, tracking 305 degrees, climbing to `A120`, estimating AYEU time 58."  
    **AYPM**: "NTZ, area QNH 1010."
	
!!! tip
    Class F airspace is not common, and many pilots will be unfamiliar with the continuous two-way communication requirement for VFR aircraft. Wherever possible, be patient and help these pilots through the required position reports.
	
### Aerodrome Traffic Zones
Aerodrome Traffic Zones (ATZ) are established within the Class F airspace around [Goroka (AYGA)](Goroka.md) , [Madang (AYMD)](Madang.md), [Mount Hagen (AYMH)](Mt-Hagen.md), and [Tokua (AYTK)](Tokua.md). ATZs extend vertically from `SFC`-`A200` and can extend laterally between 15nm and 25nm from the ARP, depending on the aerodrome.

<figure markdown>
![Example ATZ Airspace](img/ATZ_airspace.PNG){ width="700" }
</figure> 

As the airspace inside an ATZ remains Class F, the role of the local ADC differs substantially from a Class C or Class D aerodrome position.

#### ADC service within an ATZ
Within an ATZ, the local ADC will provide:

- runway separation service (ie, landing and take-off clearances);
- surface movement control (ie, taxi instructions);
- aerodrome circuit traffic regulation (in VMC, by day); and
- traffic information.

ATC clearances are required only for taxi, take-off, and landing at the primary aerodome. Clearance is not required to enter, leave, or transit the ATZ, however the Class F requirement for continuous two-way communication remains.

The ADC does not provide a separation service between any airbourne aircraft within the ATZ, IFR or VFR. Instead, the ADC will manage departing and arriving traffic by nominating:

- tracking after departure;
- turn after take-off;
- circuit entry instructions, where possible;
- visual holding locations; and
- reporting points.

!!! note
	Separation is not assured by the ADC and separation remains the ultimate responsibility of the pilot.

##### Departing Aircraft
Aircraft will make contact with ATC when advising of engine starts and prior to taxi for departure.

!!! phraseology
    **ABC**: "Madang Tower, ABC Cessna 172, IFR for AYHK, request taxi."  
    **AYMD_TWR**: "ABC, Madang Tower. Traffic is XYZ, a Cessna Caravan inbound from Goroka operating not above `A090`, estimating circuit time 15. Taxi to holding point D runway 25."  
    **ABC***: "Taxi to holding point D, runway 25, ABC."
	
    **ABC**: "ABC, Ready."  
    **AYMD_TWR**: "ABC, make right turn, cleared for takeoff."  
    **ABC**: "Make right turn, cleared for takeoff, ABC."

After takeoff, departing aircraft will provide a departure report to the ADC. The ADC will provide any additional traffic information, as well as frequency change instructions.

!!! tip
    As aircraft will remain in Class F upon departing an ATZ, aircraft will not be provided with airways clearance by the ADC. Subsequent controllers will provide airways clearance and squawk codes to aircraft entering controlled airspace.

!!! phraseology
    **ABC**: "Madang Tower, ABC departed Madang time 10, tracking 088, climbing to `A130`, estimating LETKA time 30."  
    **AYMD_TWR**: "ABC, copied departure. At 25 miles, contact Moresby on 123.40"  
    **ABC***: "At 25 miles, contact Moresby on 123.40, ABC."

##### Arriving Aircraft
Arriving aircraft will be directed to contact ADC prior to entering the ATZ. Aircraft will not be cleared for an approach, but will instead be given circuit entry instructions (if possible) and landing clearance.

!!! phraseology
	*LMN is an IFR aircraft, tracking via the RNAV-Z for runway 25L*  
    **LMN**: "Goroka Tower, ABC is overhead YGASI tracking 350, `A100` descending via RNAV-Z arrival, estimating YGASG time 45."  
    **AYGA_TWR**: "LMN, Goroka Tower, hello. No reported traffic, report overhead YGASG."  
    **LMN***: "Report overhead YGASG, LMN."  
    	
     **LMN**: "Overhead YGASG, LMN."  
     **AYGA_TWR**: "LMZ, winds light and variable, runway 35L, cleared to land."

## Charts
!!! abstract "Reference"
    Charts can be found on the [PNG AIP Flight Supplement](https://www.niuskypacific.com.pg/aip-flight-supplements/){target=new}.
