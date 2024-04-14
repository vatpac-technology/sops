---
title: Annotations
---

--8<-- "includes/abbreviations.md"

Here is a complete list of standard annotations controllers should be entering into FDRs or onto strips to ensure surrounding controllers are aware of aircrafts intended and/or planned movements/actions.

## Times 
| Information | Meaning and Usage | Example |
| ----------- | ----------------- | ------- |
| Four-figure time group | Expected or actual time of occurrences | 0955 |
| Two-figure time group | Expected or actual time of occurrences <br /> *Note: Use when there is no possibility of confusion.* | 55 |

## Route and Positions
| Information | Meaning and Usage | Example |
| ----------- | ----------------- | ------- |
| Location indicator | Four-letter ICAO designator.<br />*Note: can be reduced if unlikely to cause confusion.* | YBBN<br /> BN |
| Waypoint name | Five-letter designator<br />*Note: can be reduced if unlikely to cause confusion.* | RIVET<br />RIV |
| Place-brearing-distance locations | Position expressed as a bearing and distance from a datum.<br />(place)(bearing)(distance) | SY335045<br />*ie: SY DME, R335, 45 NM* |
| Amended route | When assigned a route that differs to that planned | AR |
| Assigned Heading | H(heading) | H350 |
| Track Extended Centreline | | TEC |

## Requests, Requirements and Restrictions
| Information | Meaning and Usage | Example |
| ----------- | ----------------- | ------- |
| Request | R(request) | R30L<br />R370 |
| Unrestricted | Aircraft may climb to the standard assignable level | U |
| No restrictions | Changes to both lateral and vertical clearances permitted without further coordination | NR |
| No lateral restrictions | Changes to only lateral clearances permitted without further coordiantion | NLR |
| No vertical restrictions | Changes to only vertical clearance permitted without further coordination | NVR |
| No restrictions on descent | Aircraft may continue descent without further coordination | NRD |
| No restrictions on climb | Aircraft may continue climb without further coordination | NRC |
| Reach by | X(position) | X20BN |
| Reach level by | R(level)X(position or time) | R280XBANDA |
| Reach level by distance before position | R(level)X(distance)(position) | R370X20LHI<br />*Note: distance **before** position* |
| Reach level by distance after position |  R(level)X(position)(distance) | R250XSY65<br />*Note: distance **after** position* |
| Reach level by time | R(level)X(time) | R370X50 |

## Approaches, Arrivals and Departures
| Information | Meaning and Usage | Example |
| ----------- | ----------------- | ------- |
| Visual approach | | VSA |
| DME arrival | | DME |
| GNSS arrival | | GNSS |
| TACAN approach | | TAC |
| NDB approach | | NDB |
| RNAV approach | | RNAV |
| RNP approach | | RNP |
| VOR approach | | VOR |
| ILS approach | | ILS |

## Speed Control
| Information | Meaning and Usage | Example |
| ----------- | ----------------- | ------- |
| Sector assigned indicated airspeed | Controller-issued speed instruction | S280 |
| Pilot reported indicated airspeed  | No speed instruction given | 280K |
| Sector assigned Mach number | Controller-issued speed instruction | M78 |
| Pilot reported Mach number  | No speed instruction given | .78 |
| Maintain given speed or greater  | (Speed)G | M78G<br />280G |
| Maintain given speed or less  | (Speed)L | M78L<br />280L |
| Cruise speed | Recording cruise speed where profile speed applies for descent | M74/P |
| Cruise and descent speed | (speed on cruise)/(speed on descent) | M80/300 |
| Mach reduction on cruise | MR(difference) | MR04 |
| Mach reduction on cruise and descent speed | MR(difference)/(descent speed) | MR04/240 |
| Descend at minimum speed | | MIN |
| Descend at maximum speed | Also cancels STAR speed restrictions | MX |
| Cancel speed restrictions (250K below 10,000ft AMSL) | | CSR |

## Sequencing
| Information | Meaning and Usage | Example |
| ----------- | ----------------- | ------- |
| Feeder fix time | F(time) | F37 |
| Estimated landing time | L(time) | L58 |
| Hold at position | H/(position) | H/SHARK |
| Hold at position with stack departure time | H/(position)/(time) | H/CANTY/33 |

## Miscellaneous
| Information | Meaning and Usage | Example |
| ----------- | ----------------- | ------- |
| Surveillance Information Service | Aircraft receiving service (Flight Following) | SIS |
| Coordinated Item | C(information) | C380 |
| Information/instruction in yet to be issued | Record information on reciept from other unit followed by a period.<br />Remove period once action is completed | MX. |
| Clearance issued to an aircraft prior to 10 NM from the lateral CTA boundary | | > |
| No IFR Traffic | | NIT |
| Cancel SARWATCH | IFR aircraft cancelled SARWATCH prior to circuit area or destination ETA | CSW |
| QNH issued (en route traffic is altimeter setting region) | Q(final 2-digit value) | Q15 |
| No level restrictions on STAR | | NHR |
| No STAR (or cancel STAR) | | NS |
| Aircraft has reported Visual | | V |
| Aircraft has reported Runway in Sight | | R |

## Less commonly used

| Information | Meaning and Usage | Example |
| ----------- | ----------------- | ------- |
| Not before | NB(time) | NB1035 |
| Not after | NA(time) | NA1035 |
| Distance left or right of track | (distance) [LOT/ROT] | 30 LOT |
| Enter lateral conflict | ELC/(time/position) | ELC/15 |
| Leaves lateral conflict | LLC/(time)(position) | LLC/190SY |
| Clearance limit | F/(position) | F/YMAV |
| Sight and pass | S+P/(callsign) | S+P/EDM |
| Sight and follow | S+F/(callsign) | S+F/VOZ882 |
| Calculated time of passing | TP(time) | TP0835 |
| At | | @ |
| Information is checked and correct | An aircraft has acknowledged information; or<br />Action has been taken or requirement has been met<br /><(information) | <F42 |
| VFR-on-top | | VT |
| Arriving at procedural tower aerodrome | Include estimate for destination navaid, track in, assigned level (if not standard assignable) and sequence number. <br /> L(time) (track) (level) (number) | L49 038 120 3 |
| Hold at normal position with stack departure time | H/(time) | H/06 |
| LAHSO approved | | LA |
| Passive LAHSO only | | PL |
| Negative LAHSO | | XX |
| Hold at normal position | | H |
| Stream to follow |  F/(preceding aircraft) | F/QLK41D |
| Stream to follow by distance | F/(preceding aircraft)+(distance) | F/TFD+18 |
| Visual departure | | VSD |
| Expected approach time | EAT(time) | EAT23 |
| Expected onwards clearance time | EOC(time) | EOC46 |
| Stack departure time | SDT(time) | SDT52 |
| Latest divert time | LDT(time) | LDT56
| Distance between two aircraft subject to a longitudinal distance standard | Record the source of information as "D" for DME, "G" for GNSS or "R" for RNAV/SCNS. Record the time of the report.<br />(distance)(source)@(time) | 30D@0437 |
| Distance report | (distance)(reference point) | 30LT
| Climb straight ahead | Non-surveillance environment | CSA |
| Left turn | L(heading) | L240 |
| Right turn | R(heading) | R020 |
| Maintain runway heading | Surveillance environment only | MR |
| Aircraft level | Two- or three-figure group <br />Record levels of 1000ft or higher as multiples of 100ft<br />Record levels less than 1000ft as a two-didget group beginning with zero. | FL177<br />A01 (100ft) |
| Above Ground Level | (level)AGL | 200AGL |
| Maintain initial level | Departure Instructions <br /> M(level) | M80 |
| Assigned visual level | V(level) | V70 |
| Assigned level not below DME or GNSS steps | (level)D/(level)G | 30D/30G |
| Amended level | | AL350 |
| VFR departure | (level)VD | 15VD |
| Special VFR | (level)SV | 15SV |
| VFR-on-top | (level)VT | A080 VT |
| Re-cleared | | RC |
| Flight planned route | | FPR |
| Abeam | A/(position) | A/MDG |
| Dead reckoning | | DR |
| Pilot Estimate | (position)(time) | UVUPU0702 |