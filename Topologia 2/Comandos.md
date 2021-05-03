# Proyecto: Protocolos HSRP, VRRP, DHCP (Topología 2)


## Información General
- SO: Windows 10
- Software: GNS3 & VMWare
#



## **Comandos para configurar SW1**

• Modos truncales

    enable
    configure terminal
    vtp domain redes1gp22
    vtp password redes1gp22
    vtp mode server
    end
    sh vtp status
    configure terminal
    vlan 10
    name RHUMANOS
    exit
    vlan 20
    name CONTABILIDAD
    exit
    vlan 30
    name VENTAS
    exit
    vlan 40 INFORMATICA
    end
    configure terminal
    int f1/0
    switchport mode trunk
    switchport trunk allowed vlan 1,10,20,30,40,1002-1005
    exit
    int f1/1
    switchport mode trunk
    switchport trunk allowed vlan 1,10,20,30,40,1002-1005
    exit
    int f1/2
    switchport mode trunk
    switchport trunk allowed vlan 1,10,20,30,40,1002-1005
    exit
    int f1/6
    switchport mode trunk
    switchport trunk allowed vlan 1,10,20,30,40,1002-1005
    exit
    int f1/7
    switchport mode trunk
    switchport trunk allowed vlan 1,10,20,30,40,1002-1005
    exit

• Portchannel 3 

    configure terminal
    interface range f1/1 - 2
    channel-group 3 mode on
    exit

• Portchannel 4 

    configure terminal
    interface range f1/6 - 7
    channel-group 4 mode on
    exit

• Guardar configuración

    copy running-config startup-config


## **Comandos para configurar SW2**

• Modos truncales

    configure terminal
    vtp domain redes1gp22
    vtp password redes1gp22
    vtp mode client
    end
    sh vtp status
    configure terminal
    int f1/1
    switchport mode trunk
    switchport trunk allowed vlan 1,10,20,30,40,1002-1005
    exit
    int f1/2
    switchport mode trunk
    switchport trunk allowed vlan 1,10,20,30,40,1002-1005
    exit
    int f1/3
    switchport mode trunk
    switchport trunk allowed vlan 1,10,20,30,40,1002-1005
    exit
    int f1/4
    switchport mode trunk
    switchport trunk allowed vlan 1,10,20,30,40,1002-1005
    exit
    int f1/5
    switchport mode trunk
    switchport trunk allowed vlan 1,10,20,30,40,1002-1005
    exit
    int f1/6
    switchport mode trunk
    switchport trunk allowed vlan 1,10,20,30,40,1002-1005
    exit
    int f1/7
    switchport mode trunk
    switchport trunk allowed vlan 1,10,20,30,40,1002-1005
    exit
    int f1/11
    switchport mode trunk
    switchport trunk allowed vlan 1,10,20,30,40,1002-1005
    exit
    int f1/12
    switchport mode trunk
    switchport trunk allowed vlan 1,10,20,30,40,1002-1005
    exit

• Portchannel 3 

    configure terminal
    interface range f1/1 - 2
    channel-group 3 mode on
    exit

• Portchannel 2 

    configure terminal
    interface range f1/6 - 7
    channel-group 2 mode on
    exit

• Portchannel 5 

    configure terminal
    interface range f1/3 - 5
    channel-group 5 mode on
    exit

• Guardar configuración

    copy running-config startup-config

## **Comandos para configurar SW3**

• Modos truncales

    configure terminal
    vtp domain redes1gp22
    vtp password redes1gp22
    vtp mode client
    end
    sh vtp status
    configure terminal
    int f1/1
    switchport mode trunk
    switchport trunk allowed vlan 1,10,20,30,40,1002-1005
    exit
    int f1/2
    switchport mode trunk
    switchport trunk allowed vlan 1,10,20,30,40,1002-1005
    exit
    int f1/3
    switchport mode trunk
    switchport trunk allowed vlan 1,10,20,30,40,1002-1005
    exit
    int f1/4
    switchport mode trunk
    switchport trunk allowed vlan 1,10,20,30,40,1002-1005
    exit
    int f1/5
    switchport mode trunk
    switchport trunk allowed vlan 1,10,20,30,40,1002-1005
    exit
    int f1/6
    switchport mode trunk
    switchport trunk allowed vlan 1,10,20,30,40,1002-1005
    exit
    int f1/7
    switchport mode trunk
    switchport trunk allowed vlan 1,10,20,30,40,1002-1005
    exit
    int f1/11
    switchport mode trunk
    switchport trunk allowed vlan 1,10,20,30,40,1002-1005
    exit
    int f1/12
    switchport mode trunk
    switchport trunk allowed vlan 1,10,20,30,40,1002-1005
    exit

• Portchannel 4 

    configure terminal
    interface range f1/6 - 7
    channel-group 4 mode on
    exit

• Portchannel 5 

    configure terminal
    interface range f1/3 - 5
    channel-group 5 mode on
    exit

• Portchannel 1 

    configure terminal
    interface range f1/1 - 2
    channel-group 1 mode on
    exit

• Guardar configuración

    copy running-config startup-config

## **Comandos para configurar SW4**

• Modos truncales

    configure terminal
    vtp domain redes1gp22
    vtp password redes1gp22
    vtp mode client
    end
    sh vtp status
    configure terminal
    int f1/1
    switchport mode trunk
    switchport trunk allowed vlan 1,10,20,30,40,1002-1005
    exit
    int f1/2
    switchport mode trunk
    switchport trunk allowed vlan 1,10,20,30,40,1002-1005
    exit
    int f1/3
    switchport mode trunk
    switchport trunk allowed vlan 1,10,20,30,40,1002-1005
    exit
    int f1/4
    switchport mode trunk
    switchport trunk allowed vlan 1,10,20,30,40,1002-1005
    exit
    int f1/5
    switchport mode trunk
    switchport trunk allowed vlan 1,10,20,30,40,1002-1005
    exit
    int f1/6
    switchport mode trunk
    switchport trunk allowed vlan 1,10,20,30,40,1002-1005
    exit
    int f1/7
    switchport mode trunk
    switchport trunk allowed vlan 1,10,20,30,40,1002-1005
    exit
    int f1/11
    switchport mode trunk
    switchport trunk allowed vlan 1,10,20,30,40,1002-1005
    exit
    int f1/12
    switchport mode trunk
    switchport trunk allowed vlan 1,10,20,30,40,1002-1005
    exit

• Portchannel 1 

    configure terminal
    interface range f1/1 - 2
    channel-group 1 mode on
    exit

• Portchannel 2 

    configure terminal
    interface range f1/6 - 7
    channel-group 2 mode on
    exit


• Guardar configuración

    copy running-config startup-config

## **Comandos para configurar R1**

• Configurar subinterfaces

    int f0/1.1
    encapsulation dot1q 10
    ip address 192.168.122.193 255.255.255.224
    exit

    int f0/1.2
    encapsulation dot1q 20
    ip address 192.168.122.225 255.255.255.240
    exit

    int f0/1.3
    encapsulation dot1q 30
    ip address 192.168.122.1 255.255.255.128
    exit

    int f0/1.4
    encapsulation dot1q 40
    ip address 192.168.122.129	255.255.255.192
    exit

• Configurar DHCP en cada subinterfaz

    int f0/1.1
    ip dhcp pool rrhh
    network 192.168.122.192	255.255.255.224
    default-route 192.168.122.193
    exit

    int f0/1.2
    ip dhcp pool contabilidad
    network 192.168.122.224 255.255.255.240
    default-route 192.168.122.225
    exit

    int f0/1.3
    ip dhcp pool ventas
    network 192.168.122.0 255.255.255.128
    default-route 192.168.122.1
    exit

    int f0/1.4
    ip dhcp pool informatica
    network 192.168.122.128	255.255.255.192
    default-route 192.168.122.129
    exit