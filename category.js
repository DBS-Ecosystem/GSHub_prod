const majorGroups = [
    {
        name: 'Managers',
        submajorGroups: [
            {
                name: 'Chief Executives, Senior Officials and Legislators',
                minorGroups: [
                    {
                        name: 'Legislators and Senior Officials',
                        unitGroups: [
                            {
                                name: 'Legislators'
                            },
                            {
                                name: 'Senior Government Officials'
                            },
                            {
                                name: 'Traditional Chiefs and Heads of Villages'
                            },
                            {
                                name: 'Senior Officials and Special-interest Organizations'
                            }
                        ]
                    },
                    {
                        name: 'Managing Directors and Chief Executives',
                        unitGroups: [
                            {
                                name: 'Managing Directors and Chief Executives'
                            }
                        ]
                    }
                ]
            },
            {
                name: 'Administrative and Commercial Managers',
                minorGroups: [
                    {
                        name: 'Business Services and Administration Managers',
                        unitGroups: [
                            {
                                name: 'Finance Managers'
                            },
                            {
                                name: 'Human Resource Managers'
                            },
                            {
                                name: 'Policy and Planning Managers'
                            },
                            {
                                name: 'Business Services and Administration Managers Not Elsewhere Classified'
                            }
                        ]
                    },
                    {
                        name: 'Sales, Marketing and Development Managers',
                        unitGroups: [
                            {
                                name: 'Sales and Marketing Managers'
                            },
                            {
                                name: 'Advertising and Public Relations Managers'
                            },
                            {
                                name: 'Research and Development Managers'
                            }
                        ]
                    }
                ]
            },
            {
                name: 'Production and Specialized Services Managers',
                minorGroups: [
                    {
                        name: 'Production Managers in Agriculture, Forestry, Fisheries',
                        unitGroups: [
                            {
                                name: 'Agricultural and Forestry Production Managers'
                            },
                            {
                                name: 'Aquaculture and Fisheries Production Managers'
                            }
                        ]
                    },
                    {
                        name: 'Manufacturing, Mining, Construction and Distribution Managers',
                        unitGroups: [
                            {
                                name: 'Manufacturing Managers'
                            },
                            {
                                name: 'Mining Managers'
                            },
                            {
                                name: 'Construction Managers'
                            },
                            {
                                name: 'Supply, Distribution and Related Managers'
                            }
                        ]
                    },
                    {
                        name: 'Information and Communications Technology Services Managers',
                        unitGroups: [
                            {
                                name: 'Information and Communications Technology Services Managers'
                            }
                        ]
                    },
                    {
                        name: 'Professional Services Managers',
                        unitGroups: [
                            {
                                name: 'Child Care Services Managers'
                            },
                            {
                                name: 'Health Services Managers'
                            },
                            {
                                name: 'Aged Care Services Managers'
                            },
                            {
                                name: 'Social Welfare Managers'
                            },
                            {
                                name: 'Education Managers'
                            },
                            {
                                name: 'Financial and Insurance Services Branch Managers'
                            },
                            {
                                name: 'Professional Services Managers Not Elsewhere Classified'
                            }
                        ]
                    }
                ]
            },
            {
                name: 'Hospitality, Retail and Other Services Managers',
                minorGroups: [
                    {
                        name: 'Hotel and Restaurant Managers',
                        unitGroups: [
                            {
                                name: 'Hotel Managers'
                            },
                            {
                                name: 'Restaurant Managers'
                            }
                        ]
                    },
                    {
                        name: 'Retail and Wholesale Trade Managers',
                        unitGroups: [
                            {
                                name: 'Retail and Wholesale Trade Managers'
                            }
                        ]
                    },
                    {
                        name: 'Other Services Managers',
                        unitGroups: [
                            {
                                name: 'Sports, Recreation and Cultual Center Managers'
                            },
                            {
                                name: 'Services Managers Not Elsewhere Classified'
                            }
                        ]
                    }
                ]
            }
        ]
    },
    {
        name: 'Professionals',
        submajorGroups: [
            {
                name: 'Science and Engineering Professionals',
                minorGroups: [
                    {
                        name: 'Physical and Earth Science Professionals',
                        unitGroups: [
                            {
                                name: 'Physicists and Astronomers'
                            },
                            {
                                name: 'Meteorologists'
                            },
                            {
                                name: 'Chemists'
                            },
                            {
                                name: 'Geologists and Geophysicists'
                            }
                        ]
                    },
                    {
                        name: 'Mathematicians, Actuaries and Statisticians',
                        unitGroups: [
                            {
                                name: 'Mathematicians, Actuaries and Statisticians'
                            }
                        ]
                    },
                    {
                        name: 'Life Science Professionals',
                        unitGroups: [
                            {
                                name: 'Biologists, Botanists, Zoologists and Related Professionals'
                            },
                            {
                                name: 'Farming, Forestry and Fisheries Advisers'
                            },
                            {
                                name: 'Environmental Protection Professionals'
                            }
                        ]
                    },
                    {
                        name: 'Engineering Professionals (excluding Electrotechnology)',
                        unitGroups: [
                            {
                                name: 'Industrial and Production Engineers'
                            },
                            {
                                name: 'Civil Engineers'
                            },
                            {
                                name: 'Environmental Engineers'
                            },
                            {
                                name: 'Mechanical Engineers'
                            },
                            {
                                name: 'Chemical Engineers'
                            },
                            {
                                name: 'Mining Engineers, Metallurgists and Related Professionals'
                            },
                            {
                                name: 'Engineering Professionals Not Elsewhere Classified'
                            }
                        ]
                    },
                    {
                        name: 'Electrotechnology Engineers',
                        unitGroups: [
                            {
                                name: 'Electrical Engineers'
                            },
                            {
                                name: 'Electronics Engineers'
                            },
                            {
                                name: 'Telecommunications Engineers'
                            }
                        ]
                    },
                    {
                        name: 'Architects, Planners, Surveyors and Designers',
                        unitGroups: [
                            {
                                name: 'Building Architects'
                            },
                            {
                                name: 'Landscape Architects'
                            },
                            {
                                name: 'Product and Garment Designers'
                            },
                            {
                                name: 'Town and Traffic Planners'
                            },
                            {
                                name: 'Cartographers and Surveyors'
                            },
                            {
                                name: 'Graphic and Multimedia Designers'
                            }
                        ]
                    }
                ]
            },
            {
                name: 'Health Professionals',
                minorGroups: [
                    {
                        name: 'Medical Doctors',
                        unitGroups: [
                            {
                                name: 'Generalist Medical Practitioners'
                            },
                            {
                                name: 'Specialist Medical Practitioners'
                            }
                        ]
                    },
                    {
                        name: 'Nursing and Midwifery Professionals',
                        unitGroups: [
                            {
                                name: 'Nursing Professionals'
                            },
                            {
                                name: 'Midwifery Professionals'
                            }
                        ]
                    },
                    {
                        name: 'Traditional and Complementary Medicine Professionals',
                        unitGroups: [
                            {
                                name: 'Traditional and Complementary Medicine Professionals'
                            }
                        ]
                    },
                    {
                        name: 'Paramedical Practitioners',
                        unitGroups: [
                            {
                                name: 'Paramedical Practitioners'
                            }
                        ]
                    },
                    {
                        name: 'Veterinarians',
                        unitGroups: [
                            {
                                name: 'Veterinarians'
                            }
                        ]
                    },
                    {
                        name: 'Other Health Professionals',
                        unitGroups: [
                            {
                                name: 'Dentists'
                            },
                            {
                                name: 'Pharmacists'
                            },
                            {
                                name: 'Environmental and Occupational Health and Hygiene Professionals'
                            },
                            {
                                name: 'Physiotherapists'
                            },
                            {
                                name: 'Dieticians and Nutritionists'
                            },
                            {
                                name: 'Audiologists and Speech Therapists'
                            },
                            {
                                name: 'Optometrists and Ophthalmic Opticians'
                            },
                            {
                                name: 'Health Professional Not Elsewhere Classified'
                            }
                        ]
                    }
                ]
            },
            {
                name: 'Teaching Professionals',
                minorGroups: [
                    {
                        name: 'University and Higher Education Teachers',
                        unitGroups: [
                            {
                                name: 'University and Higher Education Teachers'
                            }
                        ]
                    },
                    {
                        name: 'Vocational Education Teachers',
                        unitGroups: [
                            {
                                name: 'Vocational Education Teachers'
                            }
                        ]
                    },
                    {
                        name: 'Secondary Education Teachers',
                        unitGroups: [
                            {
                                name: 'Secondary Education Teachers'
                            }
                        ]
                    },
                    {
                        name: 'Primary School and Early Childhood Teachers',
                        unitGroups: [
                            {
                                name: 'Primary School Teachers'
                            },
                            {
                                name: 'Early Childhood Educators'
                            }
                        ]
                    },
                    {
                        name: 'Other Teaching Professionals',
                        unitGroups: [
                            {
                                name: 'Education Methods Specialists'
                            },
                            {
                                name: 'Special Needs Teachers'
                            },
                            {
                                name: 'Other Language Teachers'
                            },
                            {
                                name: 'Other Language Teachers'
                            },
                            {
                                name: 'Other Arts Teachers'
                            },
                            {
                                name: 'Information Technology Trainers'
                            },
                            {
                                name: 'Teaching Professionals Not Elsewhere Classified'
                            }
                        ]
                    }
                ]
            },
            {
                name: 'Business and Administration Professionals',
                minorGroups: [
                    {
                        name: 'Finance Professionals',
                        unitGroups: [
                            {
                                name: 'Accountants'
                            },
                            {
                                name: 'Financial and Investment Advisers'
                            },
                            {
                                name: 'Financial Analysts'
                            }
                        ]
                    },
                    {
                        name: 'Administration Professionals',
                        unitGroups: [
                            {
                                name: 'Management and Organization Analysts'
                            },
                            {
                                name: 'Policy Administration Professionals'
                            },
                            {
                                name: 'Personnel and Careers Professionals'
                            },
                            {
                                name: 'Training and Staff Development Professionals'
                            }
                        ]
                    },
                    {
                        name: 'Sales, Marketing and Public Relations Professionals',
                        unitGroups: [
                            {
                                name: 'Advertising and Marketing Professionals'
                            },
                            {
                                name: 'Public Relations Professionals'
                            },
                            {
                                name: 'Technical and Medical Sales Professionals (excluding ICT)'
                            },
                            {
                                name: 'Information and Communications Technology Sales Professionals'
                            }
                        ]
                    }
                ]
            },
            {
                name: 'Information and Communications Technology Professionals',
                minorGroups: [
                    {
                        name: 'Software and Applications Developers and Analysts',
                        unitGroups: [
                            {
                                name: 'Systems Analysts'
                            },
                            {
                                name: 'Software Developers'
                            },
                            {
                                name: 'Web and Multimedia Developers'
                            },
                            {
                                name: 'Applications Programmers'
                            },
                            {
                                name: 'Software and Applications Developers and Analysts Not Elsewhere Classified'
                            }
                        ]
                    },
                    {
                        name: 'Database and Network Professionals',
                        unitGroups: [
                            {
                                name: 'Database Designers and Administrators'
                            },
                            {
                                name: 'Systems Administrators'
                            },
                            {
                                name: 'Computer Network Professionals'
                            },
                            {
                                name: 'Database and Network Professionals Not Elsewhere Classified'
                            }
                        ]
                    }
                ]
            },
            {
                name: 'Legal, Social and Cultural Professionals',
                minorGroups: [
                    {
                        name: 'Legal Professionals',
                        unitGroups: [
                            {
                                name: 'Lawyers'
                            },
                            {
                                name: 'Judges'
                            },
                            {
                                name: 'Legal Professionals Not Elsewhere Classified'
                            }
                        ]
                    },
                    {
                        name: 'Librarians, Archivists and Curators',
                        unitGroups: [
                            {
                                name: 'Archivists and Curators'
                            },
                            {
                                name: 'Librarians and Related Information Professionals'
                            }
                        ]
                    },
                    {
                        name: 'Social and Religious Professionals',
                        unitGroups: [
                            {
                                name: 'Economists'
                            },
                            {
                                name: 'Sociologists, Anthropologists and Related Professionals'
                            },
                            {
                                name: 'Philosophers, Historians and Political Scientists'
                            },
                            {
                                name: 'Psychologists'
                            },
                            {
                                name: 'Social Work and Counselling Professionals'
                            },
                            {
                                name: 'Religious Professionals'
                            }
                        ]
                    },
                    {
                        name: 'Authors, Journalists and Linguists',
                        unitGroups: [
                            {
                                name: 'Authors and Related Writers'
                            },
                            {
                                name: 'Journalists'
                            },
                            {
                                name: 'Translators, Interpreters and Other Linguists'
                            }
                        ]
                    },
                    {
                        name: 'Creative and Performing Artists',
                        unitGroups: [
                            {
                                name: 'Visual Artists'
                            },
                            {
                                name: 'Musicians, Singers and Composers'
                            },
                            {
                                name: 'Dancers and Choreographers'
                            },
                            {
                                name: 'Film, Stage and Related Directors and Producers'
                            },
                            {
                                name: 'Actors'
                            },
                            {
                                name: 'Announcers on Radio, Television and Other Media'
                            },
                            {
                                name: 'Creative and Performing Artists Not Elsewhere Classified'
                            }
                        ]
                    }
                ]
            }
        ]
    },
    {
        name: 'Technicians and Associate Professionals',
        submajorGroups: [
            {
                name: 'Science and Engineering Associate Professionals',
                minorGroups: [
                    {
                        name: 'Physical and Engineering Science Technicians',
                        unitGroups: [
                            {
                                name: 'Chemical and Physical Science Technicians'
                            },
                            {
                                name: 'Civil Engineering Technicians'
                            },
                            {
                                name: 'Electrical Engineering Technicians'
                            },
                            {
                                name: 'Electronics Engineering Technicians'
                            },
                            {
                                name: 'Mechanical Engineering Technicians'
                            },
                            {
                                name: 'Chemical Engineering Technicians'
                            },
                            {
                                name: 'Mining and Metallurgical Technicians'
                            },
                            {
                                name: 'Draughtspersons'
                            },
                            {
                                name: 'Physical and Engineering Science Technicians Not Elsewhere Classified'
                            }
                        ]
                    },
                    {
                        name: 'Mining, Manufacturing and Construction Supervisors',
                        unitGroups: [
                            {
                                name: 'Mining Supervisors'
                            },
                            {
                                name: 'Manufacturing Supervisors'
                            },
                            {
                                name: 'Construction Supervisors'
                            }
                        ]
                    },
                    {
                        name: 'Process Control Technicians',
                        unitGroups: [
                            {
                                name: 'Power Production Plant Operators'
                            },
                            {
                                name: 'Incinerator and Water Treatment Plant Operators'
                            },
                            {
                                name: 'Chemical Processing Plant Controllers'
                            },
                            {
                                name: 'Petroleum and Natural Gas Refining Plant Operators'
                            },
                            {
                                name: 'Metal Production Process Controllers'
                            },
                            {
                                name: 'Process Control Technicians Not Elsewhere Classified'
                            }
                        ]
                    },
                    {
                        name: 'Life Science Technicians and Related Associate Professionals',
                        unitGroups: [
                            {
                                name: 'Life Science Technicians (excluding Medical)'
                            },
                            {
                                name: 'Agricultural Technicians'
                            },
                            {
                                name: 'Forestry Technicians'
                            }
                        ]
                    },
                    {
                        name: 'Ship and Aircraft Controllers and Technicians',
                        unitGroups: [
                            {
                                name: 'Ships’ Engineers'
                            },
                            {
                                name: 'Ships’ Deck Officers and Pilots'
                            },
                            {
                                name: 'Aircraft Pilots and Related Associate Professionals'
                            },
                            {
                                name: 'Air Traffic Controllers'
                            },
                            {
                                name: 'Air Traffic Safety Electronics Technicians'
                            }
                        ]
                    }
                ]
            },
            {
                name: 'Health Associate Professionals',
                minorGroups: [
                    {
                        name: 'Medical and Pharmaceutical Technicians',
                        unitGroups: [
                            {
                                name: 'Medical Imaging and Therapeutic Equipment Technicians'
                            },
                            {
                                name: 'Medical and Pathology Laboratory Technicians'
                            },
                            {
                                name: 'Pharmaceutical Technicians and Assistants'
                            },
                            {
                                name: 'Medical and Dental Prosthetic Technicians'
                            }
                        ]
                    },
                    {
                        name: 'Nursing and Midwifery Associate Professionals',
                        unitGroups: [
                            {
                                name: 'Nursing Associate Professionals'
                            },
                            {
                                name: 'Midwifery Associate Professionals'
                            }
                        ]
                    },
                    {
                        name: 'Traditional and Complementary Medicine Associate Professionals',
                        unitGroups: [
                            {
                                name: 'Traditional and Complementary Medicine Associate Professionals'
                            }
                        ]
                    },
                    {
                        name: 'Veterinary Technicians and Assistants',
                        unitGroups: [
                            {
                                name: 'Veterinary Technicians and Assistants'
                            }
                        ]
                    },
                    {
                        name: 'Other Health Associate Professionals',
                        unitGroups: [
                            {
                                name: 'Dental Assistants and Therapists'
                            },
                            {
                                name: 'Medical Records and Health Information Technicians'
                            },
                            {
                                name: 'Community Health Workers'
                            },
                            {
                                name: 'Dispensing Opticians'
                            },
                            {
                                name: 'Physiotherapy Technicians and Assistants'
                            },
                            {
                                name: 'Medical Assistants'
                            },
                            {
                                name: 'Environmental and Occupational Health Inspectors and Associates'
                            },
                            {
                                name: 'Ambulance Workers'
                            },
                            {
                                name: 'Health Associate Professionals Not Elsewhere Classified'
                            }
                        ]
                    }
                ]
            },
            {
                name: 'Business and Administration Associate Professionals',
                minorGroups: [
                    {
                        name: 'Financial and Mathematical Associate Professionals',
                        unitGroups: [
                            {
                                name: 'Securities and Finance Dealers and Brokers'
                            },
                            {
                                name: 'Credit and Loans Officers'
                            },
                            {
                                name: 'Accounting Associate Professionals'
                            },
                            {
                                name: 'Statistical, Mathematical and Related Assosiate Professionals'
                            },
                            {
                                name: 'Valuers and Loss Assessors'
                            }
                        ]
                    },
                    {
                        name: 'Sales and Purchasing Agents and Brokers',
                        unitGroups: [
                            {
                                name: 'Insurance Representatives'
                            },
                            {
                                name: 'Commercial Sales Representatives'
                            },
                            {
                                name: 'Buyers'
                            },
                            {
                                name: 'Trade Brokers'
                            }
                        ]
                    },
                    {
                        name: 'Business Services Agents',
                        unitGroups: [
                            {
                                name: 'Clearing and Forwarding Agents'
                            },
                            {
                                name: 'Conference and Event Planners'
                            },
                            {
                                name: 'Employment Agents and Contractors'
                            },
                            {
                                name: 'Real Estate Agents and Property Managers'
                            },
                            {
                                name: 'Business Services Agents Not Elsewhere Classified'
                            }
                        ]
                    },
                    {
                        name: 'Administrative and Specialized Secretaries',
                        unitGroups: [
                            {
                                name: 'Office Supervisors'
                            },
                            {
                                name: 'Legal Secretaries'
                            },
                            {
                                name: 'Administrative and Executive Secretaries'
                            },
                            {
                                name: 'Medical Secretaries'
                            }
                        ]
                    },
                    {
                        name: 'Government Regulatory Associate Professionals',
                        unitGroups: [
                            {
                                name: 'Customs and Border Inspectors'
                            },
                            {
                                name: 'Government Tax and Excise Officials'
                            },
                            {
                                name: 'Government Social Benefits Officials'
                            },
                            {
                                name: 'Government Licensing Officials'
                            },
                            {
                                name: 'Police Inspectors and Detectives'
                            },
                            {
                                name: 'Government Regulatory Associate Professionals Not Elsewhere Classified'
                            }
                        ]
                    }
                ]
            },
            {
                name: 'Legal, Social, Cultural and Related Associate Professionals',
                minorGroups: [
                    {
                        name: 'Legal, Social and Religous Associate Professionals',
                        unitGroups: [
                            {
                                name: 'Legal and Related Associate Professionals'
                            },
                            {
                                name: 'Social Work Associate Professionals'
                            },
                            {
                                name: 'Religious Associate Professionals'
                            }
                        ]
                    },
                    {
                        name: 'Sports and Fitness Workers',
                        unitGroups: [
                            {
                                name: 'Athletes and Sports Players'
                            },
                            {
                                name: 'Sport Coaches, Instructors and Officials'
                            },
                            {
                                name: 'Fitness and Recreation Instructors and Programme Leaders'
                            }
                        ]
                    },
                    {
                        name: 'Artistic, Cultural and Culinary Associate Professionals',
                        unitGroups: [
                            {
                                name: 'Photographers'
                            },
                            {
                                name: 'Interior Designers and Decorators'
                            },
                            {
                                name: 'Gallery, Museum and Library Technicians'
                            },
                            {
                                name: 'Chefs'
                            },
                            {
                                name: 'Other Artistic and Cultural Associate Professionals'
                            }
                        ]
                    }
                ]
            },
            {
                name: 'Information and Communications Technicians',
                minorGroups: [
                    {
                        name: 'Information and Communications Technology Operations and User Support Technicians',
                        unitGroups: [
                            {
                                name: 'Information and Communications Technology Operations Technicians'
                            },
                            {
                                name: 'Information and Communications Technology User Support Technicians'
                            },
                            {
                                name: 'Computer Network and Systems Technicians'
                            },
                            {
                                name: 'Web Technicians'
                            }
                        ]
                    },
                    {
                        name: 'Telecommunications and Broadcasting Technicians',
                        unitGroups: [
                            {
                                name: 'Broadcasting and Audiovisual Technicians'
                            },
                            {
                                name: 'Telecommunications Engineering Technicians'
                            }
                        ]
                    }
                ]
            }
        ]
    },
    {
        name: 'Clerical Support Workers',
        submajorGroups: [
            {
                name: 'General and Keyboard Clerks',
                minorGroups: [
                    {
                        name: 'General Office Clerks',
                        unitGroups: [
                            {
                                name: 'General Office Clerks'
                            }
                        ]
                    },
                    {
                        name: 'Secretaries (general)',
                        unitGroups: [
                            {
                                name: 'Secretaries (general)'
                            }
                        ]
                    },
                    {
                        name: 'Keyboard Operators',
                        unitGroups: [
                            {
                                name: 'Typists and Word Processing Operators'
                            },
                            {
                                name: 'Data Entry Clerks'
                            }
                        ]
                    }
                ]
            },
            {
                name: 'Customer Services Clerks',
                minorGroups: [
                    {
                        name: 'Tellers, Money Collectors and Related Clerks',
                        unitGroups: [
                            {
                                name: 'Bank Tellers and Related Clerks'
                            },
                            {
                                name: 'Bookmakers, Croupiers and Related Gaming Workers'
                            },
                            {
                                name: 'Pawnbrokers and Money-lenders'
                            },
                            {
                                name: 'Gebt Collectors and Related Workers'
                            }
                        ]
                    },
                    {
                        name: 'Client Information Workers',
                        unitGroups: [
                            {
                                name: 'Travel Consultants and Clerks'
                            },
                            {
                                name: 'Contact Centre Information Clerks'
                            },
                            {
                                name: 'Telephone Switchboard Operators'
                            },
                            {
                                name: 'Hotel Receptionists'
                            },
                            {
                                name: 'Inquiry Clerks'
                            },
                            {
                                name: 'Receptionists (general)'
                            },
                            {
                                name: 'Survey and Market Research Interviewers'
                            },
                            {
                                name: 'Client Information Workers Not Elsewhere Classified'
                            }
                        ]
                    }
                ]
            },
            {
                name: 'Numerical and Material Recording Clerks',
                minorGroups: [
                    {
                        name: 'Numerical Clerks',
                        unitGroups: [
                            {
                                name: 'Accounting and Bookkeeping Clerks'
                            },
                            {
                                name: 'Statistical, Finance and Insurance Clerks'
                            },
                            {
                                name: 'Payroll Clerks'
                            }
                        ]
                    },
                    {
                        name: 'Material Recording and Transport Clerks',
                        unitGroups: [
                            {
                                name: 'Stock Clerks'
                            },
                            {
                                name: 'Production Clerks'
                            },
                            {
                                name: 'Transport Clerks'
                            }
                        ]
                    }
                ]
            },
            {
                name: 'Other Clerical Support Workers',
                minorGroups: [
                    {
                        name: 'Other Clerical Support Workers',
                        unitGroups: [
                            {
                                name: 'Library Clerks'
                            },
                            {
                                name: 'Mail Carriers and Sorting Clerks'
                            },
                            {
                                name: 'Coding, Proofreading and Related Clerks'
                            },
                            {
                                name: 'Scribes and Related Workers'
                            },
                            {
                                name: 'Filing and Copying Clerks'
                            },
                            {
                                name: 'Personnel Clerks'
                            },
                            {
                                name: 'Clerical Support Workers Not Elsewhere Classified'
                            }
                        ]
                    }
                ]
            }
        ]
    },
    {
        name: 'Services and Sales Workers',
        submajorGroups: [
            {
                name: 'Personal Services Workers',
                minorGroups: [
                    {
                        name: 'Travel Attendants, Conductors and Guides',
                        unitGroups: [
                            {
                                name: 'Travel Attendants and Travel Stewards'
                            },
                            {
                                name: 'Transport Conductors'
                            },
                            {
                                name: 'Travel Guides'
                            }
                        ]
                    },
                    {
                        name: 'Cooks',
                        unitGroups: [
                            {
                                name: 'Cooks'
                            }
                        ]
                    },
                    {
                        name: 'Waiters and Bartenders',
                        unitGroups: [
                            {
                                name: 'Waiters'
                            },
                            {
                                name: 'Bartenders'
                            }
                        ]
                    },
                    {
                        name: 'Hairdressers, Beauticians and Related Workers',
                        unitGroups: [
                            {
                                name: 'Hairdressers'
                            },
                            {
                                name: 'Beauticians and Related Workers'
                            }
                        ]
                    },
                    {
                        name: 'Building and Housekeeping Supervisors',
                        unitGroups: [
                            {
                                name: 'Cleaning and Housekeeping Supervisors in Offices, Hotels and Other Establishments'
                            },
                            {
                                name: 'Domestic Housekeepers'
                            },
                            {
                                name: 'Building Caretakers'
                            }
                        ]
                    },
                    {
                        name: 'Other Personal Services Workers',
                        unitGroups: [
                            {
                                name: 'Astrologers, Fortune-tellers and Related Workers'
                            },
                            {
                                name: 'Companions and Valets'
                            },
                            {
                                name: 'Undertakers and Embalmers'
                            },
                            {
                                name: 'Pet Groomers and Animal Care Workers'
                            },
                            {
                                name: 'Driving Instructors'
                            },
                            {
                                name: 'Personal Services Workers Not Elsewhere Classified'
                            }
                        ]
                    }
                ]
            },
            {
                name: 'Sales Workers',
                minorGroups: [
                    {
                        name: 'Street and Market Salespersons',
                        unitGroups: [
                            {
                                name: 'Stall and Market Salespersons'
                            },
                            {
                                name: 'Street Food Salespersons'
                            }
                        ]
                    },
                    {
                        name: 'Shop Salespersons',
                        unitGroups: [
                            {
                                name: 'Shopkeepers'
                            },
                            {
                                name: 'Shop Supervisors'
                            },
                            {
                                name: 'Shop Sales Assistants'
                            }
                        ]
                    },
                    {
                        name: 'Cashiers and Ticket Clerks',
                        unitGroups: [
                            {
                                name: 'Cashiers and Ticket Clerks'
                            }
                        ]
                    },
                    {
                        name: 'Other Sales Workers',
                        unitGroups: [
                            {
                                name: 'Fashion and Other Models'
                            },
                            {
                                name: 'Sales Demonstrators'
                            },
                            {
                                name: 'Door-to-door Salespersons'
                            },
                            {
                                name: 'Contact Centre Salespersons'
                            },
                            {
                                name: 'Service Station Attendants'
                            },
                            {
                                name: 'Food Service Counter Attendants'
                            },
                            {
                                name: 'Sales Workers Not Elsewhere Classified'
                            }
                        ]
                    }
                ]
            },
            {
                name: 'Personal Care Workers',
                minorGroups: [
                    {
                        name: 'Child Care Workers and Teachers’ Aides',
                        unitGroups: [
                            {
                                name: 'Child Care Workers'
                            },
                            {
                                name: 'Teachers’ Aides'
                            }
                        ]
                    },
                    {
                        name: 'Personal Care Workers in Health Services',
                        unitGroups: [
                            {
                                name: 'Health Care Assistants'
                            },
                            {
                                name: 'Home-based Personal Care Workers'
                            },
                            {
                                name: 'Personal Care Workers in Health Services Not Elsewhere Classified'
                            }
                        ]
                    }
                ]
            },
            {
                name: 'Protective Services Workers',
                minorGroups: [
                    {
                        name: 'Protective Services Workers',
                        unitGroups: [
                            {
                                name: 'Firefighters'
                            },
                            {
                                name: 'Police Officers'
                            },
                            {
                                name: 'Prison Guards'
                            },
                            {
                                name: 'Security Guards'
                            },
                            {
                                name: 'Protective Services Workers Not Elsewhere Classified'
                            }
                        ]
                    }
                ]
            }
        ]
    },
    {
        name: 'Skilled Agricultural, Forestry and Fishery Workers',
        submajorGroups: [
            {
                name: 'Market-oriented Skilled Agricultural Workers',
                minorGroups: [
                    {
                        name: 'Market Gardeners and Crop Growers',
                        unitGroups: [
                            {
                                name: 'Field Crop and Vegetable Growers'
                            },
                            {
                                name: 'Tree and Shrub Crop Growers'
                            },
                            {
                                name: 'Gardeners; Horticultural and Nursery Growers'
                            },
                            {
                                name: 'Mixed Crop Growers'
                            }
                        ]
                    },
                    {
                        name: 'Animal Producers',
                        unitGroups: [
                            {
                                name: 'Livestock and Dairy Producers'
                            },
                            {
                                name: 'Poultry Producers'
                            },
                            {
                                name: 'Apiarists and Sericulturists'
                            },
                            {
                                name: 'Animal Producers Not Elsewhere Classified'
                            }
                        ]
                    },
                    {
                        name: 'Mixed Crop and Animal Producers',
                        unitGroups: [
                            {
                                name: 'Mixed Crop and Animal Producers'
                            }
                        ]
                    }
                ]
            },
            {
                name: 'Market-oriented Skilled Forestry, Fishery and Hunting Workers',
                minorGroups: [
                    {
                        name: 'Forestry and Related Workers',
                        unitGroups: [
                            {
                                name: 'Forestry and Related Workers'
                            }
                        ]
                    },
                    {
                        name: 'Fishery Workers, Hunters and Trappers',
                        unitGroups: [
                            {
                                name: 'Aquaculture Workers'
                            },
                            {
                                name: 'Inland and Coastal Waters Fishery Workers'
                            },
                            {
                                name: 'Deep-sea Fishery Workers'
                            },
                            {
                                name: 'Hunters and Trappers'
                            }
                        ]
                    }
                ]
            },
            {
                name: 'Subsistence Farmers, Fishers, Hunters and Gatherers',
                minorGroups: [
                    {
                        name: 'Subsistence Crop Farmers',
                        unitGroups: [
                            {
                                name: 'Subsistence Crop Farmers'
                            }
                        ]
                    },
                    {
                        name: 'Subsistence Livestock Farmers',
                        unitGroups: [
                            {
                                name: 'Subsistence Livestock Farmers'
                            }
                        ]
                    },
                    {
                        name: 'Subsistence Mixed Crop and Livestock Farmers',
                        unitGroups: [
                            {
                                name: 'Subsistence Mixed Crop and Livestock Farmers'
                            }
                        ]
                    },
                    {
                        name: 'Subsistence Fishers, Hunters, Trappers and Gatherers',
                        unitGroups: [
                            {
                                name: 'Subsistence Fishers, Hunters, Trappers and Gatherers'
                            }
                        ]
                    }
                ]
            }
        ]
    },
    {
        name: 'Craft and Related Trades Workers',
        submajorGroups: [
            {
                name: 'Building and Related Trades Workers (excluding Electricians)',
                minorGroups: [
                    {
                        name: 'Building Frame and Related Trades Workers',
                        unitGroups: [
                            {
                                name: 'House Builders'
                            },
                            {
                                name: 'Bricklayers and Related Workers'
                            },
                            {
                                name: 'Stonemasons, Stone Cutters, Splitters and Carvers'
                            },
                            {
                                name: 'Concrete Placers, Concrete Finishers and Related Workers'
                            },
                            {
                                name: 'Carpenters and Joiners'
                            },
                            {
                                name: 'Building Frame and Related Trades Workers Not Elsewhere Classified'
                            }
                        ]
                    },
                    {
                        name: 'Building Finishers and Related Trades Workers',
                        unitGroups: [
                            {
                                name: 'Roofers'
                            },
                            {
                                name: 'Floor Layers and Tile Setters'
                            },
                            {
                                name: 'Plasterers'
                            },
                            {
                                name: 'Insulation Workers'
                            },
                            {
                                name: 'Glaziers'
                            },
                            {
                                name: 'Plumbers and Pipe Fitters'
                            },
                            {
                                name: 'Air Conditioning and Refrigeration Mechanics'
                            }
                        ]
                    },
                    {
                        name: 'Painers, Building Structure Cleaners and Related Trades Workers',
                        unitGroups: [
                            {
                                name: 'Painters and Related Workers'
                            },
                            {
                                name: 'Spray Painters and Varnishers'
                            },
                            {
                                name: 'Building Structure Cleaners'
                            }
                        ]
                    }
                ]
            },
            {
                name: 'Metal, Machinery and Related Trades Workers',
                minorGroups: [
                    {
                        name: 'Sheet and Structural Metal Workers, Moulders and Welders, and Related Workers',
                        unitGroups: [
                            {
                                name: 'Metal Moulders and Coremakers'
                            },
                            {
                                name: 'Welders and Flame Cutters'
                            },
                            {
                                name: 'Sheet Metal Workers'
                            },
                            {
                                name: 'Structural Metal Preparers and Erectors'
                            },
                            {
                                name: 'Riggers and Cable Splicers'
                            }
                        ]
                    },
                    {
                        name: 'Blacksmith, Toolmakers and Related Trades Workers',
                        unitGroups: [
                            {
                                name: 'Blacksmith, Hammersmiths and Forging Press Workers'
                            },
                            {
                                name: 'Toolmakers and Related Workers'
                            },
                            {
                                name: 'Metal Working Machine Tool Setters and Operators'
                            },
                            {
                                name: 'Metal Polishers, Wheel Grinders and Tool Sharpeners'
                            }
                        ]
                    },
                    {
                        name: 'Machinery Mechanics and Repairers',
                        unitGroups: [
                            {
                                name: 'Motor Vehicle Mechanics and Repairers'
                            },
                            {
                                name: 'Aircraft Engine Mechanics and Repairers'
                            },
                            {
                                name: 'Agricultural and Industrial Machinery Mechanics and Repairers'
                            },
                            {
                                name: 'Bicycle and Related Repairers'
                            }
                        ]
                    }
                ]
            },
            {
                name: 'Handicraft and Printing Workers',
                minorGroups: [
                    {
                        name: 'Handicraft Workers',
                        unitGroups: [
                            {
                                name: 'Precision-instrument Makers and Repairers'
                            },
                            {
                                name: 'Musical Instrument Makers and Tuners'
                            },
                            {
                                name: 'Jewellery and Precious Metal Workers'
                            },
                            {
                                name: 'Potters and Related Workers'
                            },
                            {
                                name: 'Glass Makers, Cutters, Grinders and Finishers'
                            },
                            {
                                name: 'Signwriters, Decorative Painters, Engravers and Etchers'
                            },
                            {
                                name: 'Handicraft Workers in Wood, Basketry and Related Materials'
                            },
                            {
                                name: 'Handicraft Workers in Textile, Leather and Related Materials'
                            },
                            {
                                name: 'Handicraft Workers Not Elsewhere Classified'
                            }
                        ]
                    },
                    {
                        name: 'Printing Trades Workers',
                        unitGroups: [
                            {
                                name: 'Pre-press Technicians'
                            },
                            {
                                name: 'Printers'
                            },
                            {
                                name: 'Print Finishing and Binding Workers'
                            }
                        ]
                    }
                ]
            },
            {
                name: 'Electrical and Electronic Trades Workers',
                minorGroups: [
                    {
                        name: 'Electrical Equipment Installers and Repairers',
                        unitGroups: [
                            {
                                name: 'Building and Related Electricians'
                            },
                            {
                                name: 'Electrical Mechanics and Fitters'
                            },
                            {
                                name: 'Electrical Line Installers and Repairers'
                            }
                        ]
                    },
                    {
                        name: 'Electronics and Telecommunications Installers and Repairers',
                        unitGroups: [
                            {
                                name: 'Electronics Mechanics and Servicers'
                            },
                            {
                                name: 'Information and Communications Technology Installers and Servicers'
                            }
                        ]
                    }
                ]
            },
            {
                name: 'Food Processing, Woodworking, Garment and Other Craft and Related Trades Workers',
                minorGroups: [
                    {
                        name: 'Food Processing and Related Trades Workers',
                        unitGroups: [
                            {
                                name: 'Butchers, Fishmongers and Related Food Preparers'
                            },
                            {
                                name: 'Bakers, Pastry-cooks and Confectionary Makers'
                            },
                            {
                                name: 'Dairy Products Makers'
                            },
                            {
                                name: 'Fruit, Vegetable and Related Preservers'
                            },
                            {
                                name: 'Food and Beverage Tasters and Graders'
                            },
                            {
                                name: 'Tobacco Preparers and Tobacco Products Makers'
                            }
                        ]
                    },
                    {
                        name: 'Wood Treaters, Cabinet-Makers and Related Trades Workers',
                        unitGroups: [
                            {
                                name: 'Wood Treaters'
                            },
                            {
                                name: 'Cabinet-makers and Related Workers'
                            },
                            {
                                name: 'Woodworking Machine Tool Setters and Operators'
                            }
                        ]
                    },
                    {
                        name: 'Garment and Related Trades Workers',
                        unitGroups: [
                            {
                                name: 'Tailors, Dressmakers, Furriers and Hatters'
                            },
                            {
                                name: 'Garment and Related Patternmakers and Cutters'
                            },
                            {
                                name: 'Sewing, Embroidery and Related Workers'
                            },
                            {
                                name: 'Upholsterers and Related Workers'
                            },
                            {
                                name: 'Pelt Dressers, Tanners and Fellmongers'
                            },
                            {
                                name: 'Shoemakers and Related Workers'
                            }
                        ]
                    },
                    {
                        name: 'Other Craft and Related Workers',
                        unitGroups: [
                            {
                                name: 'Underwater Divers'
                            },
                            {
                                name: 'Shotfirers and Blasters'
                            },
                            {
                                name: 'Product Graders and Testers (excluding Foods and Beverages)'
                            },
                            {
                                name: 'Fumigators and Other Pest and Weed Controllers'
                            },
                            {
                                name: 'Craft and Related Workers Not Elsewhere Classified'
                            }
                        ]
                    }
                ]
            }
        ]
    },
    {
        name: 'Plant and Machine Operators and Assamblers',
        submajorGroups: [
            {
                name: 'Stationary Plant and Machine Operators',
                minorGroups: [
                    {
                        name: 'Mining and Mineral Processing Plant Operators',
                        unitGroups: [
                            {
                                name: 'Miners and Quarriers'
                            },
                            {
                                name: 'Mineral and Stone Processing Plant Operators'
                            },
                            {
                                name: 'Well Drillers and Borers and Related Workers'
                            },
                            {
                                name: 'Cement, Stone and Other Mineral Products Machine Operators'
                            }
                        ]
                    },
                    {
                        name: 'Metal Processing and Finishing Plant Operators',
                        unitGroups: [
                            {
                                name: 'Metal Processing Plant Operators'
                            },
                            {
                                name: 'Metal Finishing, Plating and Coating Machine Operators'
                            }
                        ]
                    },
                    {
                        name: 'Chemical and Photographic Products Plant and Machine Operators',
                        unitGroups: [
                            {
                                name: 'Chemical Products Plant and Machine Operators'
                            },
                            {
                                name: 'Photographic Products Machine Operators'
                            }
                        ]
                    },
                    {
                        name: 'Rubber, Plastic and Paper Products Machines Operators',
                        unitGroups: [
                            {
                                name: 'Rubber Products Machine Operators'
                            },
                            {
                                name: 'Plastic Products Machine Operators'
                            },
                            {
                                name: 'Paper Products Machine Operators'
                            }
                        ]
                    },
                    {
                        name: 'Textile, Fur and Leather Products Machines Operators',
                        unitGroups: [
                            {
                                name: 'Fibre Preparing, Spinning and Winding Machine Operators'
                            },
                            {
                                name: 'Weaving and Knitting Machine Operators'
                            },
                            {
                                name: 'Sewing Machine Operators'
                            },
                            {
                                name: 'Bleaching, Dyeing and Fabric Cleaning Machine Operators'
                            },
                            {
                                name: 'Fur and Leather Preparing Machine Operators'
                            },
                            {
                                name: 'Shoemaking and Related Machine Operators'
                            },
                            {
                                name: 'Laundry Machine Operators'
                            },
                            {
                                name: 'Textile, Fur and Leather Products Machines Operators Not Elsewhere Classified'
                            }
                        ]
                    },
                    {
                        name: 'Food and Related Products Machine Operators',
                        unitGroups: [
                            {
                                name: 'Food and Related Products Machine Operators'
                            }
                        ]
                    },
                    {
                        name: 'Wood Processing and Papermaking Plant Operators',
                        unitGroups: [
                            {
                                name: 'Pulp and Papermaking Plant Operators'
                            },
                            {
                                name: 'Wood Processing Plant Operators'
                            }
                        ]
                    },
                    {
                        name: 'Other Stationary Plant and Machine Operators',
                        unitGroups: [
                            {
                                name: 'Glass and Ceramics Plant Operators'
                            },
                            {
                                name: 'Steam Engine and Boiler Operators'
                            },
                            {
                                name: 'Packing, Bottling and Labelling Machine Operators'
                            },
                            {
                                name: 'Stationary Plant and Machine Operators Not Elsewhere Classified'
                            }
                        ]
                    }
                ]
            },
            {
                name: 'Assemblers',
                minorGroups: [
                    {
                        name: 'Assemblers',
                        unitGroups: [
                            {
                                name: 'Mechanical Machinery Assemblers'
                            },
                            {
                                name: 'Electrical and Electronic Equipment Assemblers'
                            },
                            {
                                name: 'Assemblers Not Elsewhere Classified'
                            }
                        ]
                    }
                ]
            },
            {
                name: 'Drivers and Mobile Plant Operators',
                minorGroups: [
                    {
                        name: 'Locomotive Engine Drivers and Related Workers',
                        unitGroups: [
                            {
                                name: 'Locomotive Engine Drivers'
                            },
                            {
                                name: 'Railway Brake, Signal and Switch Operators'
                            }
                        ]
                    },
                    {
                        name: 'Car, Van and Motorcycle Drivers',
                        unitGroups: [
                            {
                                name: 'Motorcycle Drivers'
                            },
                            {
                                name: 'Car, Taxi and Van Drivers'
                            }
                        ]
                    },
                    {
                        name: 'Heavy Truck and Bus Drivers',
                        unitGroups: [
                            {
                                name: 'Bus and Tram Drivers'
                            },
                            {
                                name: 'Heavy Truck and Lorry Drivers'
                            }
                        ]
                    },
                    {
                        name: 'Mobile Plant Operators',
                        unitGroups: [
                            {
                                name: 'Mobile Farm and Forestry Plant Operators'
                            },
                            {
                                name: 'Earthmoving and Related Plant Operators'
                            },
                            {
                                name: 'Crane, Hoist and Related Plant Operators'
                            },
                            {
                                name: 'Lifting Truck Operators'
                            }
                        ]
                    },
                    {
                        name: 'Ships’ Deck Crews and Related Workers',
                        unitGroups: [
                            {
                                name: 'Ships’ Deck Crews and Related Workers'
                            }
                        ]
                    }
                ]
            }
        ]
    },
    {
        name: 'Elementary Occupations',
        submajorGroups: [
            {
                name: 'Cleaners and Helpers',
                minorGroups: [
                    {
                        name: 'Domestic, Hotel and Office Cleaners and Helpers',
                        unitGroups: [
                            {
                                name: 'Domestic Cleaners and Helpers'
                            },
                            {
                                name: 'Cleaners and Helpers in Offices, Hotels and Other Establishments'
                            }
                        ]
                    },
                    {
                        name: 'Vehicle, Window, Laundry and Other Hand Cleaning Workers',
                        unitGroups: [
                            {
                                name: 'Hand Launderers and Pressers'
                            },
                            {
                                name: 'Vehicle Cleaners'
                            },
                            {
                                name: 'Window Cleaners'
                            },
                            {
                                name: 'Other Cleaning Workers'
                            }
                        ]
                    }
                ]
            },
            {
                name: 'Agricultural, Forestry and Fishery Labourers',
                minorGroups: [
                    {
                        name: 'Agricultural, Forestry and Fishery Labourers',
                        unitGroups: [
                            {
                                name: 'Crop Farm Labourers'
                            },
                            {
                                name: 'Livestock Farm Labourers'
                            },
                            {
                                name: 'Mixed Crop and Livestock Farm Labourers'
                            },
                            {
                                name: 'Garden and Horticultural Labourers'
                            },
                            {
                                name: 'Forestry Labourers'
                            },
                            {
                                name: 'Fishery and Aquaculture Labourers'
                            }
                        ]
                    }
                ]
            },
            {
                name: 'Labourers in Mining, Construction, Manufacturing and Transport',
                minorGroups: [
                    {
                        name: 'Mining and Construction Labourers',
                        unitGroups: [
                            {
                                name: 'Mining and Quarrying Labourers'
                            },
                            {
                                name: 'Civil Engineering Labourers'
                            },
                            {
                                name: 'Building Construction Labourers'
                            }
                        ]
                    },
                    {
                        name: 'Manufacturing Labourers',
                        unitGroups: [
                            {
                                name: 'Hand Packers'
                            },
                            {
                                name: 'Manufacturing Labourers Not Elsewhere Classified'
                            }
                        ]
                    },
                    {
                        name: 'Transport and Storage Labourers',
                        unitGroups: [
                            {
                                name: 'Hand and Pedal Vehicle Drivers'
                            },
                            {
                                name: 'Drivers of Animal-drawn Vehicles and Machinery'
                            },
                            {
                                name: 'Freight Handlers'
                            },
                            {
                                name: 'Shelf Fillers'
                            }
                        ]
                    }
                ]
            },
            {
                name: 'Food Preparation Assistants',
                minorGroups: [
                    {
                        name: 'Food Preparation Assistants',
                        unitGroups: [
                            {
                                name: 'Fast Food Preparers'
                            },
                            {
                                name: 'Kitchen Helpers'
                            }
                        ]
                    }
                ]
            },
            {
                name: 'Street and Related Sales and Services Workers',
                minorGroups: [
                    {
                        name: 'Street and Related Services Workers',
                        unitGroups: [
                            {
                                name: 'Street and Related Services Workers'
                            }
                        ]
                    },
                    {
                        name: 'Street Vendors (excluding Food)',
                        unitGroups: [
                            {
                                name: 'Street Vendors (excluding Food)'
                            }
                        ]
                    }
                ]
            },
            {
                name: 'Refuse Workers and Other Elementary Workers',
                minorGroups: [
                    {
                        name: 'Refuse Workers',
                        unitGroups: [
                            {
                                name: 'Garbage and Recycling Collectors'
                            },
                            {
                                name: 'Refuse Sorters'
                            },
                            {
                                name: 'Sweepers and Related Labourers'
                            }
                        ]
                    },
                    {
                        name: 'Other Elementary Workers',
                        unitGroups: [
                            {
                                name: 'Messengers, Package Deliverers and Luggage Porters'
                            },
                            {
                                name: 'Odd-job Persons'
                            },
                            {
                                name: 'Meter Readers and Vending-machine Collectors'
                            },
                            {
                                name: 'Water and Firewood Collectors'
                            },
                            {
                                name: 'Elementary Workers Not Elsewhere Classified'
                            }
                        ]
                    }
                ]
            }
        ]
    },
    {
        name: 'Armed Forces Occupations',
        submajorGroups: [
            {
                name: 'Commissioned Armed Forces Officers',
                minorGroups: [
                    {
                        name: 'Commissioned Armed Forces Officers',
                        unitGroups: [
                            {
                                name: 'Commissioned Armed Forces Officers'
                            }
                        ]
                    }
                ]
            },
            {
                name: 'Non-commissioned Armed Forces Officers',
                minorGroups: [
                    {
                        name: 'Non-commissioned Armed Forces Officers',
                        unitGroups: [
                            {
                                name: 'Non-commissioned Armed Forces Officers'
                            }
                        ]
                    }
                ]
            },
            {
                name: 'Armed Forces Occupations, Other Ranks',
                minorGroups: [
                    {
                        name: 'Armed Forces Occupations, Other Ranks',
                        unitGroups: [
                            {
                                name: 'Armed Forces Occupations, Other Ranks'
                            }
                        ]
                    }
                ]
            }
        ]
    }
];

module.exports.majorGroups = majorGroups;