<template>
<div class="Blockly_zone">
 <BlocklyComponent id="blockly1">
      <block type="controls_ifelse"></block>
      <block type="logic_compare"></block>
      <block type="logic_operation"></block>
      <block type="controls_repeat_ext">
          <value name="TIMES">
              <shadow type="math_number">
                  <field name="NUM">10</field>
              </shadow>
          </value>
      </block>
      <block type="logic_operation"></block>
      <block type="logic_negate"></block>
      <block type="logic_boolean"></block>
      <block type="logic_null" disabled="true"></block>
      <block type="logic_ternary"></block>
      <block type="text_charAt">
          <value name="VALUE">
              <block type="variables_get">
                  <field name="VAR">text</field>
              </block>
          </value>
      </block>
    </BlocklyComponent>

    <BlocklyComponent id="blockly2" :options="options" ref="foo"></BlocklyComponent>
    <p id="code">
      <button v-on:click="showCode()">Show JavaScript</button>
      <pre v-html="code"></pre>
    </p>
  </div>
</template>

<script>
import BlocklyComponent from '@/components/BlocklyComponent.vue'
import '@/blocks/stocks';
import '@/prompt';
import BlocklyJS from 'blockly/javascript';
export default {
  name: 'Blockly_zone',
  components: {
    BlocklyComponent
  },
  data(){
    return {
      code: '',
      options: {
        grid:
          {
            spacing: 25,
            length: 3,
            colour: '#ccc',
            snap: true
          },
        toolbox:
        `<xml>
          <category name="Logic" colour="%{BKY_LOGIC_HUE}">
            <block type="controls_if"></block>
            <block type="logic_compare"></block>
            <block type="logic_operation"></block>
            <block type="logic_negate"></block>
            <block type="logic_boolean"></block>
          </category>
          <category name="Loops" colour="%{BKY_LOOPS_HUE}">
            <block type="controls_repeat_ext">
              <value name="TIMES">
                <block type="math_number">
                  <field name="NUM">10</field>
                </block>
              </value>
            </block>
            <block type="controls_whileUntil"></block>
          </category>
          <category name="Math" colour="%{BKY_MATH_HUE}">
            <block type="math_number">
              <field name="NUM">123</field>
            </block>
            <block type="math_arithmetic"></block>
            <block type="math_single"></block>
          </category>
          <category name="Text" colour="%{BKY_TEXTS_HUE}">
            <block type="text"></block>
            <block type="text_length"></block>
            <block type="text_print"></block>
          </category>
          <category name="Variables" custom="VARIABLE" colour="%{BKY_VARIABLES_HUE}">
            </category>
          <category name="Stocks" colour="%{BKY_LOOPS_HUE}">
            <block type="stock_buy_simple"></block>
            <block type="stock_buy_prog"></block>
            <block type="stock_fetch_price"></block>
          </category>
        </xml>`
      }
    }
  },
  methods: {
    showCode() {
      this.code = BlocklyJS.workspaceToCode(this.$refs["foo"].workspace);
    }
  }
}
</script>

<style>
#code {
  position: absolute;
  right: 0;
  bottom: 0;
  width: 50%;
  height: 50%;
  margin: 0;
  background-color: beige;
}
#blockly1 {
  position: absolute;
  right: 0;
  top: 0;
  width: 50%;
  height: 50%;
}
#blockly2 {
  position: absolute;
  left: 0;
  bottom: 0;
  width: 50%;
  height: 50%;
}
</style>