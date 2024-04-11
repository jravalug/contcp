export type Actividad = {
  id: string
  nombre: string
}

export type PartidaGasto = {
  id: string
  nombre: string
  tipo: string
}

export type ElementoGasto = {
  id: string
  nombre: string
  partidaGastoId: string
}

export type Tributo = {
  parrafo: string
  nombre: string
}
