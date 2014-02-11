class CreateEvents < ActiveRecord::Migration
  def change
    create_table :events do |t|
      t.string :name
      t.integer :price, default: 0
      t.boolean :paid, default: false
      t.boolean :housing, default: false
      t.boolean :transport, default: false

      t.timestamps
    end
  end
end
