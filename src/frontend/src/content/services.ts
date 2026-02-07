import { Cpu, Monitor, Network, Zap, Gauge, Box, Settings, Factory } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

export interface Service {
  id: string;
  title: string;
  description: string;
  detailedDescription: string;
  features: string[];
  applications: string[];
  category: 'control' | 'drives' | 'monitoring' | 'energy';
  icon: LucideIcon;
}

export const services: Service[] = [
  {
    id: 'plc',
    title: 'PLC Systems',
    description: 'Programmable Logic Controllers for reliable industrial automation and process control.',
    detailedDescription:
      'Our PLC solutions provide robust, reliable control for industrial processes. We design, program, and implement PLC systems tailored to your specific automation requirements, ensuring optimal performance and easy maintenance.',
    features: [
      'Custom ladder logic and structured text programming',
      'Integration with existing systems',
      'Real-time process control and monitoring',
      'Redundancy and failover capabilities',
      'Remote diagnostics and troubleshooting',
    ],
    applications: [
      'Manufacturing automation',
      'Process control systems',
      'Material handling',
      'Assembly line control',
      'Batch processing',
    ],
    category: 'control',
    icon: Cpu,
  },
  {
    id: 'hmi',
    title: 'HMI Solutions',
    description: 'Human Machine Interface systems for intuitive operator control and monitoring.',
    detailedDescription:
      'Our HMI solutions provide operators with intuitive, user-friendly interfaces for monitoring and controlling industrial processes. We design custom HMI screens that present critical information clearly and enable efficient operation.',
    features: [
      'Custom graphical interface design',
      'Real-time data visualization',
      'Alarm management and notification',
      'Trend analysis and reporting',
      'Multi-language support',
    ],
    applications: [
      'Process monitoring and control',
      'Machine operation interfaces',
      'Production line management',
      'Quality control systems',
      'Facility management',
    ],
    category: 'monitoring',
    icon: Monitor,
  },
  {
    id: 'scada',
    title: 'SCADA Systems',
    description: 'Supervisory Control and Data Acquisition for comprehensive facility monitoring.',
    detailedDescription:
      'Our SCADA systems provide centralized monitoring and control of distributed processes. We implement scalable SCADA solutions that collect, analyze, and present data from across your facility, enabling informed decision-making and efficient operations.',
    features: [
      'Centralized monitoring and control',
      'Historical data logging and analysis',
      'Advanced alarming and event management',
      'Remote access and mobile monitoring',
      'Integration with enterprise systems',
    ],
    applications: [
      'Multi-site facility monitoring',
      'Utility management',
      'Production optimization',
      'Environmental monitoring',
      'Asset performance management',
    ],
    category: 'monitoring',
    icon: Network,
  },
  {
    id: 'servos',
    title: 'Servo Systems',
    description: 'Precision servo motor systems for accurate motion control applications.',
    detailedDescription:
      'Our servo systems deliver precise motion control for demanding applications. We specify, integrate, and tune servo drives and motors to achieve optimal performance in positioning, speed control, and synchronized motion applications.',
    features: [
      'High-precision positioning control',
      'Dynamic speed and torque control',
      'Multi-axis coordination',
      'Advanced tuning and optimization',
      'Integrated safety features',
    ],
    applications: [
      'CNC machining',
      'Packaging machinery',
      'Robotics and automation',
      'Material handling systems',
      'Printing and converting',
    ],
    category: 'drives',
    icon: Settings,
  },
  {
    id: 'vfd',
    title: 'VFD Solutions',
    description: 'Variable Frequency Drives for efficient motor speed control and energy savings.',
    detailedDescription:
      'Our VFD solutions optimize motor performance and reduce energy consumption. We design and implement variable frequency drive systems that provide precise speed control, soft starting, and significant energy savings for motor-driven equipment.',
    features: [
      'Energy-efficient motor control',
      'Soft start and stop capabilities',
      'Speed and torque optimization',
      'Harmonic mitigation',
      'Predictive maintenance features',
    ],
    applications: [
      'HVAC systems',
      'Pump and fan control',
      'Conveyor systems',
      'Compressor control',
      'Process equipment',
    ],
    category: 'drives',
    icon: Gauge,
  },
  {
    id: 'control-panels',
    title: 'Control Panels',
    description: 'Custom-designed control panels built to specification and industry standards.',
    detailedDescription:
      'We design and fabricate custom control panels that meet your exact specifications and comply with all relevant industry standards. Our panels are built for reliability, safety, and ease of maintenance, with professional documentation and labeling.',
    features: [
      'UL-listed panel fabrication',
      'Custom electrical design',
      'Professional wire management',
      'Comprehensive documentation',
      'Factory acceptance testing',
    ],
    applications: [
      'Machine control enclosures',
      'Motor control centers',
      'Process control panels',
      'Safety system panels',
      'Distribution panels',
    ],
    category: 'control',
    icon: Box,
  },
  {
    id: 'energy-management',
    title: 'Energy Management',
    description: 'Comprehensive energy monitoring and management systems for operational efficiency.',
    detailedDescription:
      'Our energy management systems help you monitor, analyze, and optimize energy consumption across your facility. We implement comprehensive solutions that provide visibility into energy usage, identify savings opportunities, and support sustainability goals.',
    features: [
      'Real-time energy monitoring',
      'Demand management and load shedding',
      'Energy analytics and reporting',
      'Peak demand reduction',
      'Sustainability tracking',
    ],
    applications: [
      'Facility energy optimization',
      'Utility cost reduction',
      'Carbon footprint tracking',
      'Demand response programs',
      'Energy efficiency initiatives',
    ],
    category: 'energy',
    icon: Zap,
  },
  {
    id: 'industry-4-0',
    title: 'Industry 4.0',
    description: 'Smart manufacturing solutions integrating IoT, AI, and data analytics for digital transformation.',
    detailedDescription:
      'Our Industry 4.0 solutions enable digital transformation of manufacturing operations through integration of IoT sensors, cloud connectivity, artificial intelligence, and advanced analytics. We help you build smart factories that are connected, intelligent, and adaptive.',
    features: [
      'IoT sensor integration and connectivity',
      'Real-time data analytics and insights',
      'Predictive maintenance systems',
      'Digital twin implementation',
      'Cloud-based monitoring and control',
    ],
    applications: [
      'Smart factory implementation',
      'Predictive maintenance programs',
      'Supply chain optimization',
      'Quality control automation',
      'Production optimization',
    ],
    category: 'monitoring',
    icon: Factory,
  },
];
