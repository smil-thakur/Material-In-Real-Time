import { ChangeDetectorRef, Component, OnInit, Renderer2 } from '@angular/core';
import { MatButtonModule } from "@angular/material/button"
import { MatIconModule } from "@angular/material/icon"
import { MatDividerModule } from "@angular/material/divider"
import { MatFormFieldModule } from "@angular/material/form-field"
import { MatSelectModule } from "@angular/material/select"
import { mat_button_types_with_desc } from '../constants/mat-button-types-desc';
import { FormControl, ReactiveFormsModule, Validators } from '@angular/forms';
import { mat_button_type } from '../enums/mat-button-type-enum';
import { CodeEditorComponent, CodeModel } from "@ngstack/code-editor"
import { mat_button_tokens } from '../constants/mat-button-tockens';
import { basic_mat_button_fix_design } from '../enums/mat-buttons-design';
@Component({
  selector: 'app-button',
  imports: [
    MatFormFieldModule,
    MatSelectModule,
    MatDividerModule,
    MatButtonModule,
    MatIconModule,
    ReactiveFormsModule,
    CodeEditorComponent
  ],
  templateUrl: './button.component.html',
  styleUrl: './button.component.scss'
})
export class ButtonComponent implements OnInit {

  public buttons = mat_button_types_with_desc;
  public buttonTypes = mat_button_type;
  public buttonTokens = mat_button_tokens;

  public buttonFormControl = new FormControl("", Validators.required)

  public getButtonDesc(buttonType: string) {
    return this.buttons.find(btn => btn.type === buttonType)?.desc;
  }

  BtnModelFixed: CodeModel = {
    language: "scss",
    uri: "styleFixed.scss",
    value: "{}"
  }

  public basicBtnModel: CodeModel = {
    language: "scss",
    uri: "style.scss",
    value: ""
  };

  public getCodeModel(buttonType: string) {
    let res: string = ":root {\n";
    let tokens = this.buttonTokens.find(bt => bt.type === buttonType)?.tokens
    if (tokens) {
      for (let token of tokens) {
        res += "\t" + token + "\n"
      }
    }
    this.basicBtnModel.value = res + "}";
    this.basicBtnModel = JSON.parse(JSON.stringify(this.basicBtnModel))
  }

  public setFixCodeModel(buttonType: string) {
    if (buttonType === this.buttonTypes.BASIC) {
      this.BtnModelFixed.value = basic_mat_button_fix_design.BASIC
      this.BtnModelFixed = JSON.parse(JSON.stringify(this.BtnModelFixed))
    }
    else if (buttonType === this.buttonTypes.RAISED) {
      this.BtnModelFixed.value = basic_mat_button_fix_design.RAISED
      this.BtnModelFixed = JSON.parse(JSON.stringify(this.BtnModelFixed))
    }
    else if (buttonType === this.buttonTypes.STROKED) {
      this.BtnModelFixed.value = basic_mat_button_fix_design.STROKED
      this.BtnModelFixed = JSON.parse(JSON.stringify(this.BtnModelFixed))
    }
    else if (buttonType === this.buttonTypes.FLAT) {
      this.BtnModelFixed.value = basic_mat_button_fix_design.FLAT
      this.BtnModelFixed = JSON.parse(JSON.stringify(this.BtnModelFixed))
    }
    else if (buttonType === this.buttonTypes.ICON) {
      this.BtnModelFixed.value = basic_mat_button_fix_design.ICON
      this.BtnModelFixed = JSON.parse(JSON.stringify(this.BtnModelFixed))
    }
    else if (buttonType === this.buttonTypes.FAB) {
      this.BtnModelFixed.value = basic_mat_button_fix_design.FAB
      this.BtnModelFixed = JSON.parse(JSON.stringify(this.BtnModelFixed))
    }
    else if (buttonType === this.buttonTypes.MINIFAB) {
      this.BtnModelFixed.value = basic_mat_button_fix_design.MINIFAB
      this.BtnModelFixed = JSON.parse(JSON.stringify(this.BtnModelFixed))
    }
    else if (buttonType === this.buttonTypes.ExtendedFAB) {
      this.BtnModelFixed.value = basic_mat_button_fix_design.ExtendedFAB
      this.BtnModelFixed = JSON.parse(JSON.stringify(this.BtnModelFixed))
    }
    else {
      this.BtnModelFixed.value = "{}"
      this.BtnModelFixed = JSON.parse(JSON.stringify(this.BtnModelFixed))
    }
  }

  ngOnInit(): void {
    this.buttonFormControl.valueChanges.subscribe((value) => {
      if (value) {
        this.getCodeModel(value)
        this.setFixCodeModel(value)
      }
    })
  }
  theme = 'vs-dark';


  options = {
    contextmenu: true,
    minimap: {
      enabled: false
    }
  };

  onCodeChanged(value: any) {
    // console.log('CODE', value);
    console.log("injecting styles")
    this.injectStyles(value)
  }

  onCodeModelChange(value: any) {
    console.log("code model changed", value)
  }

  constructor(private renderer: Renderer2, private cdRef: ChangeDetectorRef) { }

  async injectStyles(newStyle: string) {
    // const sass = await import('sass.js');
    const styleId = 'dynamic-basic-btn-style';

    const existingStyle = document.getElementById(styleId);
    if (existingStyle) {
      existingStyle.remove();
    }

    const style = this.renderer.createElement('style');
    style.id = styleId;
    style.innerHTML = `
        ${newStyle}
    `;
    this.renderer.appendChild(document.head, style);
  }
}
