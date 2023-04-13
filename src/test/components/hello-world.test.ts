import { expect, describe} from "vitest";
import { mount } from '@vue/test-utils'
import HelloWorldVue from "../../components/HelloWorld.vue";

describe("component", async ()=>{
  expect(HelloWorldVue).toBeTruthy()
  mount(HelloWorldVue)
})
