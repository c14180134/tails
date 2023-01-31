import { describe,it } from "vitest"
import {mount} from '@vue/test-utils'
import NoteVue from "../components/HelloWorld.vue"


describe('Counter.vue', () => {
    it('setup correctly', () => {
        const wrapper = mount(NoteVue)
    })
})