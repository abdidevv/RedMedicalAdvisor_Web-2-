import { useState, useEffect, useCallback } from 'react'
import * as React from "react"
import './Recursos.css'
import { Check } from "lucide-react"

"use client"

import type { DropdownMenuCheckboxItemProps } from "@radix-ui/react-dropdown-menu"

import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

type Checked = DropdownMenuCheckboxItemProps["checked"]


interface Recursos {
    id: string
    title: string
    description: string
    thumbnail: string
    tag: string
  }


const getInfo = () => [
    {
      id: "1",
      status: "cerebro",
      title: "Lorem ipsum dolor",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do ejusmod tempor incididunt ",
      thumbnail: "/placeholder.svg?height-200&width=300",
      tag: "Presentación"
    },

    {
      id: "2",
      status: "neurociencia",
      title: "Lorem ipsum dolor",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do ejusmod tempor incididunt ",
      thumbnail: "/placeholder.svg?height-200&width=300",
      tag: "Articulo"
    },

    {
      id: "3",
      status: "neurociencia",
      title: "Lorem ipsum dolor",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do ejusmod tempor incididunt ",
      thumbnail: "/placeholder.svg?height-200&width=300",
      tag: "Libro"
    },

    {
      id: "4",
      status: "cerebro",
      title: "Lorem ipsum dolor",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do ejusmod tempor incididunt ",
      thumbnail: "/placeholder.svg?height-200&width=300",
      tag: "Presentación"
    },

    {
      id: "5",
      title: "Lorem ipsum dolor",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do ejusmod tempor incididunt ",
      thumbnail: "/placeholder.svg?height-200&width=300",
      tag: "Libro"
    },

    {
      id: "14",
      title: "Lorem ipsum dolor",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do ejusmod tempor incididunt ", 
      thumbnail: "/placeholder.svg?height-200&width=300",
      tag: "Articulo"
    },

    {
      id: "7",
      title: "Lorem ipsum dolor",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do ejusmod tempor incididunt ", 
      thumbnail: "/placeholder.svg?height-200&width=300",
      tag: "Presentacion"
    },

    {
      id: "8",
      title: "Lorem ipsum dolor",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do ejusmod tempor incididunt ", 
      thumbnail: "/placeholder.svg?height-200&width=300",
      tag: "Libro"
    },

    {
      id: "9",
      title: "Lorem ipsum dolor",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do ejusmod tempor incididunt ", 
      thumbnail: "/placeholder.svg?height-200&width=300",
      tag: "Articulo"
    },

    {
      id: "10",
      title: "Lorem ipsum dolor",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do ejusmod tempor incididunt ", 
      thumbnail: "/placeholder.svg?height-200&width=300",
      tag: "Presentacion"
    },


    {
      id: "12",
      title: "Lorem ipsum dolor",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do ejusmod tempor incididunt ", 
      thumbnail: "/placeholder.svg?height-200&width=300",
      tag: "Libro"
    },

    {
      id: "6",
      title: "Lorem ipsum dolor",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do ejusmod tempor incididunt ", 
      thumbnail: "/placeholder.svg?height-200&width=300",
      tag: "Articulo"
    },
 ];

 

 function Recursos({ id }: { id: string }): JSX.Element {
    const [info, setInfo] = useState(getInfo());
    const [selected, setSelected] = useState<string | null>(null);
    const [filtro, setFiltro] = useState('');
  
    const handleCheckboxChange = (id: string) => {
      setSelected(id);
    };

    const [showStatusBar, setShowStatusBar] = React.useState<Checked>(true)
    const [showNeurociencia, setShowNeurociencia] = React.useState<Checked>(false)
    const [showCerebro, setShowCerebro] = React.useState<Checked>(false)


    useEffect(() => {
      setInfo(
        getInfo().filter((item) => {
          if (showStatusBar && item.status === "anatomia") return true
          if (showNeurociencia && item.status === "neurociencia") return true
          if (showCerebro && item.status === "cerebro") return true
          if(!showStatusBar && !showNeurociencia && !showCerebro) return true
          return false
        })
      )
    }, [showStatusBar, showNeurociencia, showCerebro])

    const [orderBy, setOrderBy] = React.useState('')

  return (
    <>
      <div className='principal'>
        
      <div className="p-5 w-full z-10 mt-0 box-border flex items-center space-x-10">
          <div className="flex items-center space-x-3">
          <span className="text-sm">Filtrar:</span> 
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <button className="btn-outline">Materia</button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-56">
              <DropdownMenuLabel>Selecciona</DropdownMenuLabel>
              <DropdownMenuCheckboxItem
                checked={showStatusBar}
                onCheckedChange={setShowStatusBar}
              >
                Anatomia
              </DropdownMenuCheckboxItem>
              <DropdownMenuCheckboxItem
                checked={showNeurociencia}
                onCheckedChange={setShowNeurociencia}
              >
                Neurociencia
              </DropdownMenuCheckboxItem>
              <DropdownMenuCheckboxItem
                checked={showCerebro}
                onCheckedChange={setShowCerebro}
              >
                Cerebro
              </DropdownMenuCheckboxItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>


        <div className="flex items-center space-x-3">
          <span className="text-sm">Ordenar por:</span>
          <Select>
            <SelectTrigger className="w-[180px] border border-gray-300">
              <SelectValue placeholder="Selecciona" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectLabel>Recursos</SelectLabel>
                <SelectItem value="todos">Todos</SelectItem>
                <SelectItem value="apple">Presentacion</SelectItem>
                <SelectItem value="banana">Libro</SelectItem>
                <SelectItem value="blueberry">Articulos</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>
      </div>
      
      <div className='document-grid-container'>
      <div className='document-grid'>
        {info.map(item => (
          <div key={item.id} className="card">
            <div className='thumbnail-container'>
              <img
                src={item.thumbnail}
                alt={item.title}
                className='thumbnail'
              />
              <div className='content'></div>
              <h2 className='document-title'>{item.title}</h2>
              <p className='document-description'>{item.description}</p>
              <button className='btn btn-white'>{item.tag}</button>
            </div>
          </div>
        ))}
      </div>
    </div>
    </div>
    </>
  );
}

export default Recursos

