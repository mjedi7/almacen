import { Component, OnInit } from '@angular/core';
import { SidebarService } from 'src/app/services/sidebar.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  menuItems: any[];
  menuItems3: any[];
  menuItems4: any[];
  menuItems4B: any[];
  menuItems44: any[];
  menuItems55: any[];
  menuItems7: any[];
  menuItems5: any[];
  menuItems10: any[];

  vertransferencias = false;
  verReportes = false;
  verArticulos = false;
  verRegistro = false;
  muestraUsuarios = false;
  movimientos = false;

  private openGroups = new Set<string>();

  constructor(public sidebarService: SidebarService) {
    this.menuItems = sidebarService.menu;
    this.menuItems3 = sidebarService.menu3;
    this.menuItems4 = sidebarService.menu4;
    this.menuItems4B = sidebarService.menu4B;
    this.menuItems44 = sidebarService.menu44;
    this.menuItems55 = sidebarService.menu55;
    this.menuItems7 = sidebarService.menu7;
    this.menuItems5 = sidebarService.menu5;
    this.menuItems10 = sidebarService.menu10;
  }

  ngOnInit(): void {
    this.getpetmisosModulos();
  }

  getpetmisosModulos(): void {
    const permiso = Number.parseInt(localStorage.getItem('permiso') || '0', 10);
    this.muestraUsuarios = permiso === 0;

    if (permiso === 0 || permiso === 1) {
      this.setVisible(this.menuItems[0], [true, true, true, false, false]);
      this.vertransferencias = true;
      this.setVisible(this.menuItems4[0], [false, true]);
      this.verArticulos = true;
      this.setVisible(this.menuItems55[0], [true, true]);
      this.verRegistro = true;
      this.movimientos = false;
      this.setVisible(this.menuItems4B[0], [false]);
      this.verReportes = true;
      this.setAllVisible(this.menuItems44[0], true);
    } else if (permiso === 3) {
      this.setVisible(this.menuItems[0], [false, false, true, true, true]);
      this.vertransferencias = false;
      this.setVisible(this.menuItems4[0], [true, true]);
      this.verArticulos = false;
      this.setVisible(this.menuItems55[0], [false, false]);
      this.verRegistro = false;
      this.movimientos = true;
      this.setVisible(this.menuItems4B[0], [true]);
      this.verReportes = false;
      this.setAllVisible(this.menuItems44[0], false);
    }
  }

  private setVisible(group: any, values: boolean[]): void {
    group?.submenu?.forEach((item: any, index: number) => item.mostrar = values[index] ?? false);
  }

  private setAllVisible(group: any, visible: boolean): void {
    group?.submenu?.forEach((item: any) => item.mostrar = visible);
  }

  hasVisibleItems(group: any): boolean {
    return !!group?.submenu?.some((item: any) => item.mostrar);
  }

  visibleCount(group: any): number {
    return group?.submenu?.filter((item: any) => item.mostrar).length || 0;
  }

  isOpen(title: string): boolean {
    return this.openGroups.has(title);
  }

  toggleGroup(title: string): void {
    if (this.openGroups.has(title)) this.openGroups.delete(title);
    else this.openGroups.add(title);
  }

  closeMobileSidebar(): void {
    document.body.classList.remove('show-sidebar');
  }
}
