import { type Pose } from '../../types'

export interface ContextMenuEvent {
	target: string
	position: {
		x: number
		y: number
	}
}

export enum NodeType {
	Start = 'start',
	End = 'end',
	Selector = 'selector',
	Sequence = 'sequence',
	Repeater = 'repeater',
	Condition = 'condition',
	MoveTo = 'moveTo',
	PickUp = 'pickUp'
}

export interface NodeData {
	label: string
}

export interface StartNodeData extends NodeData {}

export interface EndNodeData extends NodeData {
	continue: boolean
}

export interface SelectorNodeData extends NodeData {
	count: number
}

export interface SequenceNodeData extends NodeData {
	count: number
	activeTask: number
}

export interface RepeaterNodeData extends NodeData {
	count: number
}

export interface ConditionNodeData extends NodeData {}

export interface MoveToNodeData extends NodeData {
	pose: Pose
}

export interface PickUpNodeData extends NodeData {
	height: number
}

export interface StoreNode {
	id: string
	type: NodeType
	data: NodeData
	width: number
	height: number
	position: {
		x: number
		y: number
	}
}

export interface StoreEdge {
	id: string
	source: string
	sourceHandle?: string
	target: string
}

export interface Behaviour {
	id: string
	name: string
	description: string
	nodes?: StoreNode[]
	edges?: StoreEdge[]
}

export enum NodeStatusType {
	Invalid,
	Success,
	Failure,
	Running,
	Unknown
}

export interface NodeStatus {
	id: string
	status: NodeStatusType
}

export interface BehaviourStatus {
	id: string
	name: string
	revision: number
	run: boolean
	nodes: NodeStatus[]
}